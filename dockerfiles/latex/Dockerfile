FROM ubuntu:xenial
MAINTAINER Inno Jia
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -q --fix-missing \
    && apt-get install -qy build-essential wget libfontconfig1 \
    && rm -rf /var/lib/apt/lists/*

# Install TexLive with scheme-basic
RUN wget http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz; \
	mkdir /install-tl-unx; \
	tar -xvf install-tl-unx.tar.gz -C /install-tl-unx --strip-components=1; \
    echo "selected_scheme scheme-basic" >> /install-tl-unx/texlive.profile; \
	/install-tl-unx/install-tl -profile /install-tl-unx/texlive.profile; \
    rm -r /install-tl-unx; \
	rm install-tl-unx.tar.gz

# install Chinese support
RUN apt-get install latex-cjk-all \
	apt-get install texlive-lang-chinese
    

ENV PATH="/usr/local/texlive/2017/bin/x86_64-linux:${PATH}"

ENV HOME /data
WORKDIR /data

# Install latex packages
RUN tlmgr install latexmk

VOLUME ["/data"]
