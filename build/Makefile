# Tetris Vs Space Invaders build file
SRC_DIR = ../src
DST_DIR = ../scripts

COFFEE_FILES = ${SRC_DIR}/main.coffee\
	${SRC_DIR}/main.coffee\
	${SRC_DIR}/input.coffee\
	${SRC_DIR}/Art.coffee\
	${SRC_DIR}/Sound.coffee\
	${SRC_DIR}/entity/Entity.coffee\
	${SRC_DIR}/level/Level.coffee\
	${SRC_DIR}/level/Camera.coffee\
	${SRC_DIR}/screen/Screen.coffee

all:
	@@echo "Starting build..."

# @@coffee -o scripts/ -j -c ${COFFEE_FILES}
# Can't figure out how to join AND watch, so just watchin' for now
# and bare because I can't join it!
	@@coffee --watch --bare --output ${DST_DIR} --compile ${SRC_DIR}

