import React from 'react'
import { Html } from '@react-three/drei'
const Map = () => {
  return (
        <Html
        as='div'
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.174983123578!2d80.0506575744729!3d12.9606523151194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1697979743213!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Html>
  )
}

export default Map