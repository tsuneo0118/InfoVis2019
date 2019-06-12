function main()
{
    var isocolor = range.value
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    
    screen.init(volume, {
	width: window.innerWidth * 0.8,
	height: window.innerHeight,
	targetDom: document.getElementById('display'),
	enableAutoResize: false
    })

 
    
    document.getElementById("change-isovalue-button").onclick = function()
    {
	isocolor = range.value;
    var surfaces = Isosurfaces( volume, isovalue, isocolor );
    screen.scene.add( surfaces );

};
 
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, isocolor );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });
;
    
    window.addEventListener('resize', function() {
	screen.resize([ window.innerWidth * 0.8, window.innerHeight ]);
    });
    
    screen.loop();
}
