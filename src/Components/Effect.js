import { Vector2 } from 'three';
import { useEffect, useMemo } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';



extend({ EffectComposer, ShaderPass, RenderPass });

function Effect() {
    const { gl, scene, camera ,size} = useThree()

    const [base,final] = useMemo(() => {
      const renderPass = new RenderPass(scene, camera);
      //const offscreenTarget = new WebGLRenderTarget(size.width, size.height);

      const comp = new EffectComposer(gl);
      comp.renderToScreen = false;
      comp.addPass(renderPass);
      const composer = new EffectComposer(gl);
      const bloomPass = new UnrealBloomPass( new Vector2( window.innerWidth, window.innerHeight ),0.5,0.25,0.05);
      composer.addPass(renderPass);
      composer.addPass(bloomPass);  
      
      return [comp,composer];
    }, [gl,scene,camera]);
    useEffect(() => {
        base.setSize(size.width, size.height);
        final.setSize(size.width, size.height);
      }, [base, final, size])
    useFrame(() => {
      base.render();
      final.render();
    },1);

    return null;
};

export default Effect;