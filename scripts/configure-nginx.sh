#!/bin/sh

# Script para configurar nginx con o sin SSL según la disponibilidad de certificados

SSL_CERT_PATH="/etc/letsencrypt/live/revista.repositoriounipol.com/fullchain.pem"
SSL_KEY_PATH="/etc/letsencrypt/live/revista.repositoriounipol.com/privkey.pem"

echo "Verificando disponibilidad de certificados SSL..."

# Limpiar configuraciones conflictivas
rm -f /etc/nginx/conf.d/default.conf
rm -f /etc/nginx/conf.d/default-ssl.conf

if [ -f "$SSL_CERT_PATH" ] && [ -f "$SSL_KEY_PATH" ]; then
    echo "✅ Certificados SSL encontrados. Configurando nginx con SSL..."
    if [ -f "/etc/nginx/conf.d/base-nginx.conf" ]; then
        cp /etc/nginx/conf.d/base-nginx.conf /etc/nginx/conf.d/default.conf
        echo "✅ Configuración SSL aplicada"
    else
        echo "❌ Error: archivo base-nginx.conf no encontrado"
        exit 1
    fi
else
    echo "⚠️ Certificados SSL no encontrados. Configurando nginx sin SSL..."
    
    # Si el archivo no existe, crear la configuración dinámicamente
    if [ ! -f "/etc/nginx/conf.d/base-nginx-no-ssl.conf" ]; then
        echo "📝 Creando configuración sin SSL dinámicamente..."
        cat > /etc/nginx/conf.d/default.conf << 'EOF'
# Configuración sin SSL para desarrollo/testing
server {
    listen 80;
    server_name revista.repositoriounipol.com localhost;

    root /usr/share/nginx/html;

    # Aplicación principal (SPA)
    location / {
        try_files $uri /index.html;
    }

    # Proxy para Strapi (contenido)
    location /content/ {
        proxy_pass http://strapi:1337/;

        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # Ubicación para el desafío ACME de Let's Encrypt
    location /.well-known/acme-challenge/ {
        alias /var/www/certbot/.well-known/acme-challenge/;
        try_files $uri =404;
    }
}
EOF
        echo "✅ Configuración sin SSL creada dinámicamente"
    else
        cp /etc/nginx/conf.d/base-nginx-no-ssl.conf /etc/nginx/conf.d/default.conf
        echo "✅ Configuración sin SSL aplicada desde archivo"
    fi
fi

echo "🚀 Configuración de nginx aplicada. Iniciando nginx..."
exec nginx -g "daemon off;"