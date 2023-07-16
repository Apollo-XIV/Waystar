FROM ubuntu:latest
RUN alias k=kubectl && \
    apt-get update && \
    apt-get install -y sudo curl git-core gnupg locales zsh wget nano fonts-powerline && \
    locale-gen en_GB.UTF-8 && \
    adduser --quiet --disabled-password --shell /bin/zsh --home /home/dev --gecos "User" dev && \
    echo "dev:dev" | chpasswd && usermod -aG sudo dev
ENV TERM xterm
ENV DOCKER_MACHINE_NAME dev
RUN passwd -d dev
USER dev
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -p https://github.com/marlonrichert/zsh-autocomplete
RUN sh -c "$(curl -sS https://starship.rs/install.sh)" -- --yes 
RUN echo "eval '$(starship init zsh)'" >> ~/.zshrc
RUN mkdir ~/.config && \
    touch ~/.config/starship.toml && \
    starship preset nerd-font-symbols -o ~/.config/starship.toml
RUN printf "[container]\ndisabled=true" >> ~/.config/starship.toml
RUN sudo sh -c "$(curl -fsSL https://deb.nodesource.com/setup_19.x)"
RUN sudo apt-get install -y nodejs
RUN sudo apt-get update && sudo apt-get upgrade -y
CMD ["zsh"]