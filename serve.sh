#!/bin/bash

# Script pour lancer un serveur local de développement
# Usage: ./serve.sh [port]

PORT=${1:-3000}

echo "🚀 Démarrage du serveur de développement sur http://localhost:$PORT"
echo ""

# Essayer différentes options dans l'ordre de préférence
if command -v npx &> /dev/null; then
    echo "📦 Utilisation de npx serve..."
    npx --yes serve -l $PORT
elif command -v python3 &> /dev/null; then
    echo "🐍 Utilisation de Python 3..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "🐍 Utilisation de Python..."
    python -m http.server $PORT
elif command -v php &> /dev/null; then
    echo "🐘 Utilisation de PHP..."
    php -S localhost:$PORT
else
    echo "❌ Aucun serveur trouvé. Installe Node.js, Python ou PHP."
    exit 1
fi
