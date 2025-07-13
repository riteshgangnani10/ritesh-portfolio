#!/bin/bash

echo "🚀 Setting up GitHub Repository for Portfolio..."
echo ""

# Get user input for GitHub details
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter repository name (default: ritesh-portfolio): " REPO_NAME
REPO_NAME=${REPO_NAME:-ritesh-portfolio}

echo ""
echo "📋 Repository Details:"
echo "Username: $GITHUB_USERNAME"
echo "Repository: $REPO_NAME"
echo "URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

# Set up remote
echo "🔗 Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Repository setup complete!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME to verify"
echo "2. Deploy to Vercel by importing this repository"
echo "3. Connect your custom domain in Vercel settings"
echo ""
echo "📋 Manual GitHub Repository Creation:"
echo "If you haven't created the repository yet:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Description: Professional AI/ML Portfolio showcasing GenAI expertise"
echo "4. Public repository"
echo "5. Don't initialize with README"
echo "6. Click 'Create Repository'"
echo ""
echo "Then run this script again!" 