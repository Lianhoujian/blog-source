#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Lianhoujian/Lianhoujian.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://Lianhoujian:${GITHUB_TOKEN}@github.com/Lianhoujian/Lianhoujian.github.io.git
  git config --global user.name "Lianhoujian"
  git config --global user.email "1013312097@qq.com"
fi

git init
git add -A
git commit -m 'github actions deploy'

# 部署到 https://<USERNAME>.github.io
git push -f $githubUrl master
#git push -f git@github.com:xlzy520/xlzy520.github.io.git master

# 删除dist文件夹的.git文件夹
#rm .git

cd -
