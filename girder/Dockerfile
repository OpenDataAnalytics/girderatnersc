FROM girder/girder:latest

COPY girder.local.conf /girder/girder/conf/girder.local.cfg

COPY newt /girder/plugins/newt

RUN girder-install web --plugins newt
