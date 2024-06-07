// serve component : html에 javascript 기능 넣기 불가능
// 서버 컴포넌트 장점 : 로딩속도가 빠름, 검색엔진 노출 유리

// client component : html에 javascript 기능 넣기 가능, useState, useEffect 등 사용 가능
// 클라이언트 컴포넌트 단점 : 로딩속도 느림(자바스크립트 많이 필요)
// 하이드레이션 필요 -> hydration : html유저에게 보낸 후에 자바스크립로 html 다시 읽고 분석하는 일  
// 'use client' -> client component

import { age, name } from './data.js';
import Hello from './Hello';
 
interface CartItemProps {
  cart : string;
}

export default function Cart() {
let cart = ['Tomatoes', 'Pasta', 'Pizza']
return (
  <div className="">
      <Hello />
      <h4 className="title">Cart Page</h4>
      <CartItem cart = { cart[0] }/>
      <CartItem cart = { cart[1] }/>
      <CartItem cart = { cart[2] }/>
    </div>
  );
}

function CartItem({ cart }: CartItemProps){
  return (
    <div className="cart-item">
        <p>{ cart }</p>
        <p>$40</p>
        <p>1개</p>
    </div>
  )
}