# Love2D Tutorial

My Love2D tutorial, made by me<br>
This tutorial don't cover: `Installation` and `Setup`<br>

In this tutorial I will make a simple top-down game, with some most useful things a newbie NEED to know to start making games in Love2D<br>


# Introdution
The most useful thing I have learned is: Use libraries in your game<br>
Yes, you can make all by your own, but if you don't want to spend time learning how to implement physics, gravity, collision, map making etc. You can use libraries for that, and is the most useful thing.

# Player Movement and some basics
First we write the 3 fundamental functions of Love2D

```lua
-- Updated when the game starts
function love.load()
end

-- Updated every frame
-- dt -> How many seconds passed between a frame and another
function love.update(dt)
end

-- Used to draw things to the screen
function love.draw()
end
```

First, let's draw a circle to the screen
```lua
function love.draw()
	love.graphics.circle("fill", 0, 0, 100)
end
```

This function take the arguments:
```lua
love.graphics.circle(mode, x, y, size)
```

There is two different types: Fill and Line<br>
The size starts at the center of the circle and goes 100 pixels up, 100 pixels down etc<br><br>

Let's make our player's object
```lua
function love.load()
	player={
		x=0,
		y=0
	}
end
```

You can also make, but I prefer the other
```lua
function love.load()
	player={}
	player.x = 0
	player.y = 0
end
```

When you run this code, you will noticed that the circle is on top-left, because it's x and y is 0, 0<br>
The screen is like this graph:

```
			^ -Y
			|
			|
-X			|             +X
<-----------|------------->
			|
			|
			|
			v
			  Y+
```

So, let's set the player's x and y to 400 and 200 respectivally
```lua
function love.load()
	player={
		x=400,
		y=200
	}
end
```

Now the circle is in a better position, now let's make the movement
```lua
function love.update(dt)
	if love.keyboard.isDown("right") then -- If the right-arrow is pressed
		player.x = player.x + 3 -- Player's X is added 3
	end
```

So, what this code says is: If the right-arrow is pressed then the X of the player is added 3 each time, so the player goes 3 pixels to the right each time the key is been pressed<br><br>

"Why adding is equal to go to the right?"
Remember the graph? To the right is the same that adding to X, so... If we subtract? That's right

```lua
function love.update(dt)
	if love.keyboard.isDown("right") then
		player.x = player.x + 3
	elseif love.keyboard.isDown("left") then
		player.x = player.x - 3
	end
end
```

To make up and down is simple like that
```lua
function love.update(dt)
	if love.keyboard.isDown("right") then
		player.x = player.x + 3
	elseif love.keyboard.isDown("left") then
		player.x = player.x - 3
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + 3
	elseif love.keyboard.isDown("up") then
		player.y = player.y - 3
	end
end
```

Now, one last thing<br>
If I want to change player's speed, I don't want to change each one individually
```lua
function love.load()
	player={
		x=400,
		y=200,
		speed=4
	}
end
```

And
```lua
function love.update(dt)
	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
	end
end
```

# Character Animation

First of wall, download the [SpriteSheet](https://onedrive.live.com/?authkey=%21AOsHyDkDjLbnAJk&cid=07FB62B9601741EF&id=7FB62B9601741EF%2123675&parId=7FB62B9601741EF%2123674&o=OneUp)<br>

## Setup
In your project directory, create a folder called `assets` and inside a folder called `sprites` and put the downloaded image there<br>

Your directory may look like that:
```
assets/
├─ sprites/
│  ├─ player-sheet.png
├─ main.lua
```

Let's add to player's object
```lua
function love.load()
	player={
		x=400,
		y=200,
		speed=4
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}
end
```

Now to make this sheet look like an animation, we can use a library called [anim8](https://github.com/kikito/anim8)<br>
Download, in the project directory you will find a file called `anim8.lua`, copy this file and in your project directory create a folder called `libraries` and paste `anim8.lua`<br><br>

Now your directory should look like this:
```
assets/
├─ libraries/
│  ├─ anim8.lua
├─ sprites/
│  ├─ player-sheet.png
├─ main.lua
```

Now import to your code, like this:

```lua
function love.load()
	anim8 = require 'libraries/anim8' -- Importing anim8

	player={
		x=400,
		y=200,
		speed=4
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}
end
```

Now we can start make our animation, first of all, let's make a grid
```lua
function love.load()
	anim8 = require 'libraries/anim8'

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	-- Grid
	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())
end

```

```lua
anim8.newGrid(frame_width, frame_height, spriteSheet_width, spriteSheet_height)

-- Frame Width and Height
--[[
	If you go to the spriteSheet, you will notice that each frame is 10x16, that is what we writed there, with just 1 pixel offset (Wich is the space between a frame and another)

	The spriteSheet width and Height is easy to figure out

]]
```

Using this grid, the code will know how to separate each frame<br>
Let's store this animations in in a new table and get each animation direction (Each row of the image is a different direction)
```lua
function love.load()
	anim8 = require 'libraries/anim8'

	-- Unblur
	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())
	player.animations = {}
	player.animations.down = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
end

```

```lua
anim8.newAnimation(grid(number_of_columns, wich_row), seconds_between_animations)
```

Now in `love.update()`
```lua
function love.update(dt)
	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
	end

	-- Update animations
	player.animations.down:update(dt)
end
```

And draw
```lua
function love.draw()
	player.animations.down:draw(player.spriteSheet, player.x, player.y, nil, 10)
end
```

```lua
player.animations.down:draw(sprite, x, y, rotation, scale)
```

Doing this, works, but the sprite is bluring, due to scaling, so let's fix that!
```lua
function love.load()
	anim8 = require 'libraries/anim8'

	-- Unblur
	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())
	player.animations = {}
	player.animations.down = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
end
```

Now, let's add the another animations
```lua
function love.load()
	anim8 = require 'libraries/anim8'

	-- Unblur
	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )
end
```

And add a new item to not draw each animation individually
```lua
function love.load()
	anim8 = require 'libraries/anim8'

	-- Unblur
	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

This way we can assign whenever value we want to draw the animations
```lua
function love.draw()
	player.anim:draw(player.spriteSheet, player.x, player.y, nil, 10)
end
```

And update
```lua
function love.update(dt)
	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed

		-- To update animations
		player.anim = player.animations.right
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed

		player.anim = player.animations.left
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed

		player.anim = player.animations.up
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed

		player.anim = player.animations.up
	end

	-- Update animations
	player.anim:update(dt)
end
```

But, the animation still playing when no key are been pressed, let's fix that!<br>
The second column is where the player is chill (frame 2)
```lua
function love.update(dt)
	local isMoving = false -- False, is not moving

	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
		player.anim = player.animations.right

		-- If is moving, change to true
		isMoving = true -- Is true, is moving
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
		player.anim = player.animations.left

		isMoving = true
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
		player.anim = player.animations.down

		isMoving = true
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
		player.anim = player.animations.up

		isMoving = true
	end

	if isMoving==false then
		-- Change to frame 2 (standing chill) of current row if no key is been pressed
		player.anim:gotoFrame(2)
	end

	player.anim:update(dt)
end
```

# Tileset

In this tutorial I will be teaching how to use Tiled to make your map to your game, using a tileset<br>
Firs of all download the [tielset](https://onedrive.live.com/?authkey=%21AOHeFNTpfveVtv4&cid=07FB62B9601741EF&id=7FB62B9601741EF%2123720&parId=7FB62B9601741EF%2123719&o=OneUp) and [Tiled](https://thorbjorn.itch.io/tiled) (It's free)<br><br>

## Tiled
Create a folder called `maps` inside `assets` and paste `tileset.png`<br>
Open Tiled and click on `File > New > New Map`, in the window that opens set the `Map Size`'s `width` and `height` to **30 tiles** and the tile size to the tileset size, this depends of wich tile you are using, `tileset.png` is **64x64**<br><br>

When the editor opens, first thing you want to do is import your tileset, onde the bottom-right, click on `New Tilset` and select your tileset and make sure `Embed in map` is turned on (It's very important that this option is turned on, if not, the map will not work), and again sets the tileset's `width` and `height` to **64x64**, you can adjust `margin` and `spacing` if your tileset have some, but in my case, all te tiles are right to each other with no gaps between, so the `space` is 0 and has no `margin` around the tileset (Save in `maps` folder)<br><br>

Now you can edit you map as you wan. If you place the plant, you will notice the background of the plant, don't match to the floor, that is because you are replacing the floor by the plant, to fix that create another layer (top-right) so the layers is:
```
Tile Layer 2
Tile Layer 1
```
In the layer 1, you can place the plants with no problem, if you create another layer above `Tile Layer 2`, the tile in `Tile Layer 3` is above `Tile Layer 2` and `Tile Layer 1`, and go on, that's why now the plants works propely<br><br>

When you are ready to export your map, click `Ctrl + Shift + E` or `File > Export As` and export to `maps` folder as `.lua`, I'll export as `forest.lua`, but you can export as you want (I recommend also save normally, as `.tmx` in case you need to edit later)

## STI

To get this map on our Love2D project, we need a library called [Simple Tiled Implementation](https://github.com/karai17/Simple-Tiled-Implementation). Download the repository and move the folder `sti` to `libraries` folder<br>
Your directory may look like that:
```
libraries/
├─ anim8.lua
├─ sti/
assets/
├─ maps/
│  ├─ tileset.png
│  ├─ forest.lua
├─ sprites/
│  ├─ player-sheet.png
main.lua
```

Now we can include in `main.lua`
```lua
function love.load()
	anim8 = require 'libraries/anim8'
	-- Include sti
	sti = require 'libraries/sti'

	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

And create the map
```lua
function love.load()
	anim8 = require 'libraries/anim8'
	sti = require 'libraries/sti'

	-- Import map
	gameMap = sti('assets/maps/forest.lua')

	love.graphics.setDefaultFilter("nearest", "nearest")

	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

Now you can draw the map on `love.draw()`
```lua
function love.draw()
	gameMap:draw()

	-- Change the player scale from 10 to 6, just to fix better
	player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6)
end
```

That's all, simple like that

# Camera
In this tutorial I'll show how to implement a camera that follows the player

## HUMP
[HUMP](https://github.com/vrld/hump) is a library that provides many tools, but I'll only use the camera for now, download the repository and move `camera.lua` file to `libraries` folder and imports in `love.load()`

```lua
function love.load()
	-- Camera library
	camera = require 'libraries/camera'

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

And creates your camera

```lua
function love.load()
	camera = require 'libraries/camera'
	-- Creating camera
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

Now we change in `love.draw()` we change to all be draw from the camera perspective

```lua
function love.draw()
	cam:attach()
		gameMap:draw()
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6)
	cam:detach()
end
```

With the camera, we can't use `gameMap:draw()`, this creates a conflict, instead, we need to draw each layer of the map individually<br>

In my map I have to layers, one for ground and one for trees (Even if you have one layer only, you need to do that)

```lua
function love.draw()
	-- Drawing all inside camera's perspective
	cam:attach()
		gameMap:drawLayer(gameMap.layers['Ground']) -- Wich layer you want to draw first
		gameMap:drawLayer(gameMap.layers['Trees'])
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6)
	cam:detach()
end
```

You run the game know, nothing has changed, that's because the camera is motionless, we need to change to be always following the player
```lua
function love.update(dt)
	local isMoving = false

	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
		player.anim = player.animations.right
		isMoving = true
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
		player.anim = player.animations.left
		isMoving = true
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
		player.anim = player.animations.down
		isMoving = true
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
		player.anim = player.animations.up
		isMoving = true
	end

	if isMoving==false then
		player.anim:gotoFrame(2)
	end

	player.anim:update(dt)

	-- Follow the player
	cam:lookAt(player.x, player.y)
end
```

Now the camera is following the player, but with some offset, that is because the camera is following the player's x and y, wich is in up-left of the player's image<br>
Now we need to update the offset variables


```lua
function love.draw()
	-- Drawing all inside camera's perspective
	cam:attach()
		gameMap:drawLayer(gameMap.layers['Ground']) -- Wich layer you want to draw first
		gameMap:drawLayer(gameMap.layers['Trees'])
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6, nil, 6, 9) -- Half of the sprite's Width and Height
	cam:detach()
end
```

```lua
love.graphics.draw(drawable, x, y, rotation, scale_x, scale_y, offset_x, offset_y, kx, ky)
```

You can also make the camera stop to moving when reach the map's border (To not show the void)

```lua
function love.update(dt)
	local isMoving = false

	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
		player.anim = player.animations.right
		isMoving = true
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
		player.anim = player.animations.left
		isMoving = true
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
		player.anim = player.animations.down
		isMoving = true
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
		player.anim = player.animations.up
		isMoving = true
	end

	if isMoving==false then
		player.anim:gotoFrame(2)
	end

	player.anim:update(dt)
	cam:lookAt(player.x, player.y)

	-- Stop the camera at the border
	local w = love.graphics.getwidth()
	local h = love.graphics.getheight()

	-- Left Border
	if cam.x < w/2 then -- Just at the border but don't want to go any farder
		cam.x = w/2 -- Puts the camera just far enough
	end

	-- Up border
	if cam.y < h/2 then
		cam.y = h/2
	end

	-- Right and bottom need the width and height of background
	local mapW = gameMap.width * gameMap.tileWidth -- Number of tiles wide * Pixels wide a tile is
	-- This is only if you are using a tiled map
	-- If you are using a background, this is just the background widht, not this calculation
	local mapH = gameMap.height * gameMap.tileHeight

	if cam.x > (mapW - w/2) then
		cam.x = (mapW - w/2) -- Right at the border
	end

	if cam.y > (mapH - h/2) then
		cam.y = (mapH - h/2) -- Right at the border
	end
end
```

One last thing is, if you want to have a HUD or something that appears in front of the camera, you do this drawing outside the `am:attach()`

Just a example:
```lua
function love.draw()
	cam:attach()
		gameMap:drawLayer(gameMap.layers['Ground'])
		gameMap:drawLayer(gameMap.layers['Trees'])
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6, nil, 6, 9)
	cam:detach()
	
	-- Drawing a HUD
	love.graphics.print("Hello", 10, 10)
end
```

# Walls and Collision

We you need the [Windfield](https://github.com/a327ex/windfield), that's a very popular library for making physics. Download the repository and move the `windfield` folder to `libraries` folder<br><br>

At this moment your project directory may look something like this:
```
libraries/
├─ anim8.lua
├─ camera.lua
├─ sti/
├─ windfield/
assets/
├─ maps/
│  ├─ tileset.png
│  ├─ forest.lua
├─ sprites/
│  ├─ player-sheet.png
main.lua
```

Then import the windfield and create the world
```lua
function love.load()
	-- windfield
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0) -- 0, 0 Gravity

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png')
	}

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

Update the world
```lua
function love.update(dt)
	local isMoving = false -- False, is not moving

	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
		player.anim = player.animations.right

		-- If is moving, change to true
		isMoving = true -- Is true, is moving
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
		player.anim = player.animations.left

		isMoving = true
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
		player.anim = player.animations.down

		isMoving = true
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
		player.anim = player.animations.up

		isMoving = true
	end

	if isMoving==false then
		player.anim:gotoFrame(2)
	end

	
	-- Update world
	world:update(dt)

	player.anim:update(dt)
	cam:lookAt(player.x, player.y)


	local w = love.graphics.getWidth()
	local h = love.graphics.getHeight()

	if cam.x < w/2 then
		cam.x = w/2
	end

	if cam.y < h/2 then
		cam.y = h/2
	end

	local mapW = gameMap.width * gameMap.tilewidth
	local mapH = gameMap.height * gameMap.tileheight

	if cam.x > (mapW - w/2) then
		cam.x = (mapW - w/2)
	end

	if cam.y > (mapH - h/2) then
		cam.y = (mapH - h/2)
	end
end
```

And temporally draw the world, to see the colliders

```lua
function love.draw()
	cam:attach()
		gameMap:drawLayer(gameMap.layers['Ground'])
		gameMap:drawLayer(gameMap.layers['Trees'])
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6, nil, 6, 9)
		
		-- Draw inside camera
		world:draw()
	cam:detach()
end
```

## Player's Collider

We need to give our player a collider
```lua
function love.load()
	-- windfield
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0) -- 0, 0 Gravity

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),

		-- Player's collider
		-- BSGRectangle is like a normal rectangle, but the corners are shaped
		-- Wich is better for player characters
		collider =  world:newBSGRectangleCollider(400, 250, 40, 80, 14) -- 14 just to demonstrate
	}

	-- Prevents the collider to rotate
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

```lua
world:newBSGRectangleCollider(x, y, width, height, caved) -- How caved are the corners
```

Now change the collider's position
```lua
function love.update(dt)
	local isMoving = false -- False, is not moving

	if love.keyboard.isDown("right") then
		player.x = player.x + player.speed
		player.anim = player.animations.right

		-- If is moving, change to true
		isMoving = true -- Is true, is moving
	elseif love.keyboard.isDown("left") then
		player.x = player.x - player.speed
		player.anim = player.animations.left

		isMoving = true
	end

	if love.keyboard.isDown("down") then
		player.y = player.y + player.speed
		player.anim = player.animations.down

		isMoving = true
	elseif love.keyboard.isDown("up") then
		player.y = player.y - player.speed
		player.anim = player.animations.up

		isMoving = true
	end

	if isMoving==false then
		player.anim:gotoFrame(2)
	end

	
	world:update(dt)
	-- Update collider
	player.x = player.collider:getX()
	player.y = player.collider:getY()


	player.anim:update(dt)
	cam:lookAt(player.x, player.y)


	local w = love.graphics.getWidth()
	local h = love.graphics.getHeight()

	if cam.x < w/2 then
		cam.x = w/2
	end

	if cam.y < h/2 then
		cam.y = h/2
	end

	local mapW = gameMap.width * gameMap.tilewidth
	local mapH = gameMap.height * gameMap.tileheight

	if cam.x > (mapW - w/2) then
		cam.x = (mapW - w/2)
	end

	if cam.y > (mapH - h/2) then
		cam.y = (mapH - h/2)
	end
end
```

And fix the size
```lua
function love.load()
	-- windfield
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0) -- 0, 0 Gravity

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=4,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),
		
		-- Fix size
		collider =  world:newBSGRectangleCollider(400, 250, 40, 100, 10)
	}

	-- Prevents the collider to rotate
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

Now the player is not moving anymore, this because because we are always locking the player's position to the collider position, and since the collider isn't moving...<br><br>

We will fix that changing the player's movement to change the collider instead

```lua
function love.update(dt)
	local isMoving = false


	-- Collider's velocity
	local vx = 0 -- X direction
	local vy = 0 -- Y direction


	if love.keyboard.isDown("right") then
		-- Change player.x to vx
		vx =  player.speed

		player.anim = player.animations.right
		isMoving = true
	elseif love.keyboard.isDown("left") then
		-- Since here is left, we want to be negative
		vx = player.speed * -1
		
		player.anim = player.animations.left
		isMoving = true
	end

	if love.keyboard.isDown("down") then
		-- Update here too
		vy = player.speed

		player.anim = player.animations.down
		isMoving = true
	elseif love.keyboard.isDown("up") then
		-- Same thing here
		vy = player.speed * -1

		player.anim = player.animations.up
		isMoving = true
	end

	-- And let's update vx and vy values to match whatever our keyboard input is
	player.collider:setLinearVelocity(vx, vy) -- X, Y


	if isMoving==false then
		player.anim:gotoFrame(2)
	end

	
	world:update(dt)
	player.x = player.collider:getX()
	player.y = player.collider:getY()


	player.anim:update(dt)
	cam:lookAt(player.x, player.y)


	local w = love.graphics.getWidth()
	local h = love.graphics.getHeight()

	if cam.x < w/2 then
		cam.x = w/2
	end

	if cam.y < h/2 then
		cam.y = h/2
	end

	local mapW = gameMap.width * gameMap.tilewidth
	local mapH = gameMap.height * gameMap.tileheight

	if cam.x > (mapW - w/2) then
		cam.x = (mapW - w/2)
	end

	if cam.y > (mapH - h/2) then
		cam.y = (mapH - h/2)
	end
end
```

Now if you save and run, you will notice that the player's velocity is not that good, now the player's velocity need to be a higher number

```lua
function love.load()
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0)

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=300, -- That's is a better speed
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),
		collider =  world:newBSGRectangleCollider(400, 250, 40, 100, 10)
	}
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down
end
```

At this point, is not the player that is moving, is the collider, the player's x and y is the same as the collider, and we are moving the collider

## Walls

To do that, first we need to create the wall colllider
```lua
function love.load()
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0)

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=300,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),
		collider =  world:newBSGRectangleCollider(400, 250, 40, 100, 10)
	}
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down

	-- Wall's collider
	-- RectangleCollider is the same as BSGRectangleCollider, but with no shaped corner
	local wall = world:newRectangleCollider(100, 200, 120, 300) -- X, Y, Width, Height
end
```

Now, there is a wall, if you collide with it, you will notice a very fun movement, maybe it can be useful for some project<br><br>

That happened because our wall is `dynamic`, we need to set to `static`
Static means that it's not impacted by collision and it won't move away
```lua
function love.load()
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0)

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=300,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),
		collider =  world:newBSGRectangleCollider(400, 250, 40, 100, 10)
	}
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down

	local wall = world:newRectangleCollider(100, 200, 120, 300)
	wall:setType('static') -- Bye cool effect
end
```

Now the wall is working propely. What we want to do now is make it so we can generate these walls from **Tiled**<br>
This requires to have simple tiled implementation<br><br>

In tiled, at the up-right, find a button called `New Layer` (Or right click on layer area) and click on `Object Layer`. I'm going to call it "Walls"<br>
Now we just need to draw the colliders using the tools at the top<br>
>Tipe: You cant hold `Ctrl` while drawing the colliders, to match the grid
>Tipe: You can sellect the snapping in `View > Snapping` I use `Snap to Pixels` but you can use whatever you want
<br><br>

**Make sure to save and export as lua**

## Generate Walls from Tiled

First thing we are gonna do is create the walls table
```lua
function love.load()
	wf = require 'libraries/windfield'
	world = wf.newWorld(0, 0)

	camera = require 'libraries/camera'
	cam = camera()

	anim8 = require 'libraries/anim8'
	love.graphics.setDefaultFilter("nearest", "nearest")

	sti = require 'libraries/sti'
	gameMap = sti('assets/maps/forest.lua')


	player={
		x=400,
		y=200,
		speed=300,
		spriteSheet = love.graphics.newImage('assets/sprites/player-sheet.png'),
		collider =  world:newBSGRectangleCollider(400, 250, 40, 100, 10)
	}
	player.collider:setFixedRotation(true)

	player.grid = anim8.newGrid(12, 18, player.spriteSheet:getWidth(), player.spriteSheet:getHeight())

	player.animations = {}
	player.animations.down  = anim8.newAnimation( player.grid('1-4', 1), 0.2 )
	player.animations.left  = anim8.newAnimation( player.grid('1-4', 2), 0.2 )
	player.animations.right = anim8.newAnimation( player.grid('1-4', 3), 0.2 )
	player.animations.up    = anim8.newAnimation( player.grid('1-4', 4), 0.2 )

	player.anim = player.animations.down 

	walls = {}

	-- Check if we have a layer called "Walls"
	if gameMap.layers["Walls"] then
		-- Get every object in the "Walls" layer
		for i, obj in pairs(gameMap.layers["Walls"].objects) do
			-- Now get object and change to what we want
			local wall = world:newRectangleCollider(obj.x, obj.y, obj.width, obj.height)
			wall:setType('static')

			-- Insert the wall to the walls table
			table.insert(walls, wall)
		end
	end
end
```

If you go to Tiled and select some object, you can view It's X, Y, Width, Height at the left<br><br>

If you save and run... IT WORKS!<br><br>
Now to make the colliders invisble, you just comment the `world:draw()`

```lua
function love.draw()
	cam:attach()
		gameMap:drawLayer(gameMap.layers['Ground'])
		
		-- I move the player to here, now the Trees are drew after player, so the player walks behind the trees
		player.anim:draw(player.spriteSheet, player.x, player.y, nil, 6, nil, 6, 9)

		gameMap:drawLayer(gameMap.layers['Trees'])
		-- world:draw()
	cam:detach()
end
```