FROM ubuntu:latest
LABEL authors="Paulo"

ENTRYPOINT ["top", "-b"]