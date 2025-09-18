#!/bin/sh

# Script para configurar nginx con o sin SSL según la disponibilidad de certificados

SSL_CERT_PATH="/etc/letsencrypt/live/revista.repositoriounipol.com/fullchain.pem"
SSL_KEY_PATH="/etc/letsencrypt/live/revista.repositoriounipol.com/privkey.pem"

echo "Verificando disponibilidad de certificados SSL..."

if [ -f "$SSL_CERT_PATH" ] && [ -f "$SSL_KEY_PATH" ]; then
    echo "✅ Certificados SSL encontrados. Configurando nginx con SSL..."
    cp /etc/nginx/conf.d/base-nginx.conf /etc/nginx/conf.d/default.conf
else
    echo "⚠️ Certificados SSL no encontrados. Configurando nginx sin SSL..."
    cp /etc/nginx/conf.d/base-nginx-no-ssl.conf /etc/nginx/conf.d/default.conf
fi

echo "Configuración de nginx aplicada. Iniciando nginx..."
exec nginx -g "daemon off;"