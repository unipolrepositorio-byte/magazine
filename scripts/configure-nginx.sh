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
    
    # Si el archivo no existe, crear la configuración SSL dinámicamente
    if [ ! -f "/etc/nginx/conf.d/base-nginx.conf" ]; then
        echo "📝 Creando configuración SSL dinámicamente..."
        cat > /etc/nginx/conf.d/default.conf << 'EOF'
# BLOQUE HTTPS
server {
    listen 443 ssl;
    server_name revista.repositoriounipol.com;

    # Certificados reales de Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/revista.repositoriounipol.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/revista.repositoriounipol.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_session_timeout 1d;
    ssl_session_cache shared:MozSSL:10m;
    ssl_session_tickets off;

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
}

# BLOQUE HTTP — necesario para validación ACME de Let's Encrypt
server {
    listen 80;
    server_name revista.repositoriounipol.com;

    # Permitir que certbot acceda al desafío sin redirección
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    # Redirigir todo lo demás a HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}
EOF
        echo "✅ Configuración SSL creada dinámicamente"
    else
        cp /etc/nginx/conf.d/base-nginx.conf /etc/nginx/conf.d/default.conf
        echo "✅ Configuración SSL aplicada desde archivo"
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
        root /var/www/certbot;
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