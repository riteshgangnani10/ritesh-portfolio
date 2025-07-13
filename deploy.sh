#!/bin/bash

echo "🚀 Deploying Ritesh Gangnani's Portfolio..."

# Build the project
echo "📦 Building project..."
npm run build

echo "✅ Build completed successfully!"
echo ""
echo "🌐 Deployment options:"
echo "1. Vercel: vercel --prod"
echo "2. Netlify: netlify deploy --prod --dir=build"
echo "3. GitHub Pages: npm run deploy (after setting up gh-pages)"
echo "4. Static server: serve -s build"
echo ""
echo "📁 Build files are ready in the 'build' directory"
echo "🎉 Your portfolio is ready to deploy!" 