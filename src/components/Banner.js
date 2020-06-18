import React from 'react';
import bannerBg from '../images/banner-bg.jpg';

export const Banner = () => {
  return (
    <div className='text-center shadow-xl w-5/6 m-auto border'>
      <img src={bannerBg} className='m-auto' alt=""/>
      <p className='border-t-2 p-6 text-sm'>
        Гарантійний термін на всі роботи, здійснені "FixYourDevice", становить 6 місяців. Гарантія на комплектуючі, що використовуються при ремонті, надається відповідно до гарантійної політикою їх виробників, строком, як правило, не менше 1 року.

        Надаємо гарантію практично на всі послуги. Якщо раптом ви порахуєте, що вам надали послугу не досить високої якості, ми виправимо ситуацію абсолютно безкоштовно, або повернемо вам 100% ваших грошей без зайвих питань.
      </p>
    </div>
  )
};