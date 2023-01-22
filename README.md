yarn add -D husky
npx husky install
npx husky add .husky/pre-commit "yarn lint"
npx husky add .husky/pre-push "yarn build"
yarn add -D @commitlint/config-conventional @commitlint/cli
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
