            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );

			document.body.appendChild( renderer.domElement );
            
            //Se crean los arrays correspondientes a las dimensiones de los cubos.
            const dim= [[3,3,3],[2,2,2],[1.5,1.5,1.5]];
            
            //Se crea un arreglo de geometria, en donde se llena por medio del ciclo for.
            var geom=[];
            for (let i=0; i<3; i++){
            geom.push(new THREE.BoxGeometry(dim[i][0],dim[i][1],dim[i][2]));
            }

            //Generación de luz
            const pointColor = 0xffffff;
            const pointLight = new THREE.PointLight(pointColor);
            pointLight.distance= 10;
            pointLight.position.set (-4,0,3);
            pointLight.intensity = 5;
            pointLight.visible =true;
            scene.add(pointLight);// Se añade la luz al escenario.

            const color= [{color: 0xffff00},{color: 0x0000ff},{color: 0xff0000}]; //Array de colores
            const material= [new THREE.MeshToonMaterial(color[0]),new THREE.MeshNormalMaterial(color[1]),new THREE.MeshPhongMaterial(color[2])];// Array de materiales
            
            
            //Se crea un arreglo de cubos, en donde se llena por medio del ciclo for.
            const cubo=[];
            for(let i=0;i<3;i++){
                cubo.push(new THREE.Mesh(geom[i], material[i]));
            }

            
            
            for(let i=0;i<3;i++){
                scene.add(cubo[i]);// Se añaden los cubos a la escena.

            }

            cubo[1].position.x=8;           //Ubicación del cubo 2
            cubo[2].position.x=-8;          //Ubicación del cubo 3

            camera.position.z = 12;// Posición de la camara

			
            /**
            * EscaladoReal: Aplica la funcion de animación a los cubos
            * ENTRADAS: Array cubo
            * SALIDA: 
            */
			function animate() {
				requestAnimationFrame( animate );

				cubo[0].rotation.y += 0.03;     //Rotación cubo 1 con respecto al eje y
				cubo[1].rotation.x += 0.05;     //Rotación cubo 1 con respecto al eje x
                cubo[2].rotation.z += 0.01;     //Rotación cubo 1 con respecto al eje z

				renderer.render( scene, camera );
			}

			animate();