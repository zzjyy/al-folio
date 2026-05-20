FROM docker.m.daocloud.io/library/ruby:slim

RUN sed -i 's|deb.debian.org|mirrors.aliyun.com|g; s|security.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list.d/debian.sources || true

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    imagemagick \
    libjpeg-dev \
    libpng-dev \
    libtiff-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

ENV BUNDLE_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/rubygems/
RUN bundle config mirror.https://rubygems.org ${BUNDLE_MIRROR}

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 8080

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "8080"]
