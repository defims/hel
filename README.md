##basic

* position: absolute
* data-sl-x: translateX
* data-sl-y: translateY
* data-sl-z: z-index, scaleX and scaleY

##skeleton

###Bone

* parent
* children []
* localMatrix Array

    4x4

* globalMatrix Array

    4x4

* offset

    getter from Matrix, setter to Matrix  
    base on parent coordinate  

* rotate

    getter from Matrix, setter to Matrix  
    base on parent coordinate  

* scale

    getter from Matrix, setter to Matrix  
    base on parent coordinate  

* render ()

    write data-sl with global x,y,z
