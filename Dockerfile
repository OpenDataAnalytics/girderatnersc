FROM girder/girder:2.3

ADD newt /girder/plugins/newt

RUN girder-install web --plugins newt
