'use client'
import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
export const ProfileForm = () => {

  const DataSend =(event: React.FormEvent<HTMLFormElement>)=>{  
    event.preventDefault();   
    const formData = new FormData(event.currentTarget);  
    
    const nickname = formData.get("nickname");
    const birthYear = Number(formData.get("birthYear"));
    const birthMonth = Number(formData.get("birthMonth"));
    const birthDay = Number(formData.get("birthDay"));
    const gender = Number(formData.get("gender"));


    try{        
      const docRef = addDoc(collection(db,"users"),{    
        nickname:nickname,
        birthYear:birthYear,
        birthMonth:birthMonth,
        birthDay,
        gender,
      });
    } catch(e){    
      console.error('Error adding document: ', e);  
    }
  }



  return (
    <form className="bg-yellow p-6" onSubmit={DataSend}>

      <div>
        <input className="border" aria-label="nickname" name='nickname' type="text" />
      </div>
      
      <div>
        <input className="border"  aria-label="nickname" name='birthYear' type="number" />
        <input className="border"  aria-label="nickname" name='birthMonth' type="number" />
        <input className="border" aria-label="nickname" name='birthDay' type="number" />  
      </div>

      <div>
        <input className="border" aria-label="mail" value={0} name='gender' type='radio' />
        <input className="border" aria-label="femail" value={1} name='gender' type='radio' />
        <input className="border" aria-label="other" value={2} name='gender' type='radio' />
      </div>

      <div>
        <input className="border" value={'登録'} type='submit' />
      </div>
    </form>
  )
}