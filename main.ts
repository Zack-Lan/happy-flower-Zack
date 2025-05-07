let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . 
    . . . . . 5 . 5 5 4 4 5 . 5 . . 
    . . . . . . 5 5 4 4 4 4 5 . . . 
    . . . . . . 5 5 4 4 4 4 5 5 . . 
    . . . . 5 . 5 4 4 e 4 5 5 . . . 
    . . . . . . 5 5 e e 5 5 . . . . 
    . . . . . . . 5 e 5 . . 5 . . . 
    . . . . . . 5 . e . 5 . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . . . . . . . e . . . . . . 
    . . e e e e . . . e . . . . . e 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 f 5 f . . . . . . . . 
        . . . . 5 f 5 f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        let picture: Sprite = null
        picture.image.flipX()
    }
})
