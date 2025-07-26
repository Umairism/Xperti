# Required Libraries & Dependencies

This document outlines all the required libraries, dependencies, and their purposes in the Xperti Medical Equipment Solutions application.

## 📦 Production Dependencies

### Core Framework & Runtime

#### React 18.3.1
- **Purpose**: Frontend JavaScript library for building user interfaces
- **License**: MIT
- **Why Required**: Core framework for the entire application
- **Security**: Regularly updated, large community support
- **Installation**: `npm install react@^18.3.1`

#### React DOM 18.3.1
- **Purpose**: React package for working with the DOM
- **License**: MIT
- **Why Required**: Enables React components to render in web browsers
- **Security**: Part of React ecosystem, same security considerations
- **Installation**: `npm install react-dom@^18.3.1`

### UI Components & Icons

#### Lucide React 0.344.0
- **Purpose**: Beautiful & consistent icon library
- **License**: ISC
- **Why Required**: Provides all icons used throughout the application
- **Security**: Well-maintained, no known vulnerabilities
- **Installation**: `npm install lucide-react@^0.344.0`
- **Usage**: Icons for navigation, services, features, and UI elements

## 🛠️ Development Dependencies

### Build Tools & Bundler

#### Vite 5.4.2
- **Purpose**: Next generation frontend build tool
- **License**: MIT
- **Why Required**: Fast development server and optimized production builds
- **Features**: 
  - Hot Module Replacement (HMR)
  - TypeScript support
  - CSS preprocessing
  - Optimized bundling
- **Installation**: `npm install --save-dev vite@^5.4.2`

#### @vitejs/plugin-react 4.3.1
- **Purpose**: Official Vite plugin for React support
- **License**: MIT
- **Why Required**: Enables React Fast Refresh and JSX transformation
- **Installation**: `npm install --save-dev @vitejs/plugin-react@^4.3.1`

### Language & Type Safety

#### TypeScript 5.5.3
- **Purpose**: Typed superset of JavaScript
- **License**: Apache-2.0
- **Why Required**: 
  - Type safety during development
  - Better IDE support
  - Compile-time error catching
  - Enhanced code maintainability
- **Installation**: `npm install --save-dev typescript@^5.5.3`

#### @types/react 18.3.5
- **Purpose**: TypeScript type definitions for React
- **License**: MIT
- **Why Required**: Enables TypeScript support for React components
- **Installation**: `npm install --save-dev @types/react@^18.3.5`

#### @types/react-dom 18.3.0
- **Purpose**: TypeScript type definitions for React DOM
- **License**: MIT
- **Why Required**: Enables TypeScript support for React DOM methods
- **Installation**: `npm install --save-dev @types/react-dom@^18.3.0`

### CSS & Styling

#### Tailwind CSS 3.4.1
- **Purpose**: Utility-first CSS framework
- **License**: MIT
- **Why Required**: 
  - Rapid UI development
  - Consistent design system
  - Responsive design utilities
  - Dark mode support
- **Installation**: `npm install --save-dev tailwindcss@^3.4.1`

#### PostCSS 8.4.35
- **Purpose**: CSS post-processor
- **License**: MIT
- **Why Required**: 
  - Processes Tailwind CSS
  - Enables CSS transformations
  - Autoprefixer integration
- **Installation**: `npm install --save-dev postcss@^8.4.35`

#### Autoprefixer 10.4.18
- **Purpose**: PostCSS plugin to parse CSS and add vendor prefixes
- **License**: MIT
- **Why Required**: 
  - Cross-browser compatibility
  - Automatic vendor prefix addition
  - CSS optimization
- **Installation**: `npm install --save-dev autoprefixer@^10.4.18`

### Code Quality & Linting

#### ESLint 9.9.1
- **Purpose**: JavaScript and TypeScript linter
- **License**: MIT
- **Why Required**: 
  - Code quality enforcement
  - Bug prevention
  - Consistent coding standards
  - Security vulnerability detection
- **Installation**: `npm install --save-dev eslint@^9.9.1`

#### @eslint/js 9.9.1
- **Purpose**: ESLint's JavaScript configurations
- **License**: MIT
- **Why Required**: Base ESLint rules for JavaScript
- **Installation**: `npm install --save-dev @eslint/js@^9.9.1`

#### typescript-eslint 8.3.0
- **Purpose**: ESLint plugin and parser for TypeScript
- **License**: MIT
- **Why Required**: TypeScript-specific linting rules
- **Installation**: `npm install --save-dev typescript-eslint@^8.3.0`

#### eslint-plugin-react-hooks 5.1.0-rc.0
- **Purpose**: ESLint rules for React Hooks
- **License**: MIT
- **Why Required**: Enforces Rules of Hooks and prevents common mistakes
- **Installation**: `npm install --save-dev eslint-plugin-react-hooks@^5.1.0-rc.0`

#### eslint-plugin-react-refresh 0.4.11
- **Purpose**: ESLint rules for React Refresh
- **License**: MIT
- **Why Required**: Ensures components are compatible with Fast Refresh
- **Installation**: `npm install --save-dev eslint-plugin-react-refresh@^0.4.11`

#### globals 15.9.0
- **Purpose**: Global identifiers from different JavaScript environments
- **License**: MIT
- **Why Required**: Provides global variable definitions for ESLint
- **Installation**: `npm install --save-dev globals@^15.9.0`

## 🔧 Installation Guide

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm equivalent)
- **Operating System**: Windows, macOS, or Linux

### Complete Installation

```bash
# Clone the repository
git clone <repository-url>
cd Xperti

# Install all dependencies
npm install

# Verify installation
npm run dev
```

### Individual Package Installation

```bash
# Production dependencies
npm install react@^18.3.1 react-dom@^18.3.1 lucide-react@^0.344.0

# Development dependencies
npm install --save-dev \
  vite@^5.4.2 \
  @vitejs/plugin-react@^4.3.1 \
  typescript@^5.5.3 \
  @types/react@^18.3.5 \
  @types/react-dom@^18.3.0 \
  tailwindcss@^3.4.1 \
  postcss@^8.4.35 \
  autoprefixer@^10.4.18 \
  eslint@^9.9.1 \
  @eslint/js@^9.9.1 \
  typescript-eslint@^8.3.0 \
  eslint-plugin-react-hooks@^5.1.0-rc.0 \
  eslint-plugin-react-refresh@^0.4.11 \
  globals@^15.9.0
```

## 🔒 Security Considerations

### Dependency Security

- **Regular Updates**: All dependencies are regularly updated to latest stable versions
- **Vulnerability Scanning**: `npm audit` is run regularly to check for vulnerabilities
- **Security Patches**: Critical security updates are applied immediately
- **License Compliance**: All dependencies use permissive licenses (MIT, ISC, Apache-2.0)

### Security Scanning Commands

```bash
# Check for vulnerabilities
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix

# Check for outdated packages
npm outdated

# Update packages (carefully review breaking changes)
npm update
```

## 📊 Bundle Analysis

### Production Bundle Contents

- **React Runtime**: ~42KB (gzipped)
- **Lucide Icons**: ~15KB (gzipped, tree-shaken)
- **Application Code**: ~25KB (gzipped)
- **Tailwind CSS**: ~8KB (gzipped, purged)

### Performance Optimizations

- **Tree Shaking**: Unused code is automatically removed
- **Code Splitting**: Dynamic imports for route-based splitting
- **Asset Optimization**: Images and assets are optimized during build
- **CSS Purging**: Unused Tailwind classes are removed

## 🔄 Update Strategy

### Major Version Updates

1. **Review Changelog**: Check breaking changes and new features
2. **Test in Development**: Thoroughly test all functionality
3. **Update Documentation**: Update this file and README
4. **Security Review**: Ensure no new vulnerabilities introduced

### Minor/Patch Updates

1. **Automated Updates**: Can be updated automatically for patches
2. **Weekly Review**: Check for updates weekly
3. **Testing**: Run test suite after updates

### Deprecated Dependencies

Currently, there are no deprecated dependencies. We monitor deprecation notices and plan migrations accordingly.

## 📞 Support & Troubleshooting

### Common Issues

1. **Node Version Mismatch**: Ensure Node.js 18+ is installed
2. **Package Install Failures**: Clear npm cache (`npm cache clean --force`)
3. **TypeScript Errors**: Ensure all @types packages are installed
4. **ESLint Conflicts**: Check ESLint configuration compatibility

### Getting Help

- **Documentation**: Check package documentation on npm
- **Community**: Stack Overflow, GitHub Issues
- **Project Support**: development@xperti.com

---

**Last Updated**: January 2025  
**Next Review**: April 2025

> All dependencies are carefully selected for security, performance, and maintainability.
