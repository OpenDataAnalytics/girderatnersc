FROM girder/girder:latest

ADD newt /girder/plugins/newt

RUN girder-install web --plugins newt
