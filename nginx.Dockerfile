FROM nginx:latest

LABEL maintainer="Wenjun Yao"
LABEL email="wenjun.yao@uqconnect.edu.au"
COPY ./dist/ /usr/share/nginx/html

