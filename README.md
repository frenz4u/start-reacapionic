# 개발환경
* node(npm) 설치 (yarn 은 보류)
* npm install -g cordova ionic

# 생성
* ionic start APP_NAME
* cd APP_NAME
* npm i @capacitor/core –save
* npm i -D @capacitor/cli –save
* npx cap init
* npm i @capacitor/android @capacitor/ios –save
* npx cap add android

# 구동
* Web : ionic start (OR ionic tool in VS Code)
* Android : ionic tool in VS Code

# 배포
* npm run build
* npx cap copy
* npx cap sync android