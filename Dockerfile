FROM node as builder

RUN mkdir /app

WORKDIR /app

COPY . .
RUN npm install && npm run build



FROM nginx as nginx

COPY --from=builder /app/dist /usr/share/nginx/html

# /etc/nginx/nginx.conf

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 컨테이너의 80번 포트를 열어준다.
EXPOSE 80
