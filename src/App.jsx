import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import imageNice from './assets/znakomstvo.png'
import imageFace from './assets/Face.png'


export default function App() {

  const [isHovered, SetisHovered] = useState(false);
  const [isload, Setisload] = useState(false);
  const [isActiveBlurCards, SetisActiveBlurCards] = useState(false);
  const [isClickCards, SetisClickCards] = useState(false);
  const [isLoadCircle, SetisLoadCircle] = useState(false);
  const [isTouchCards, SetisTouchCards] = useState(false);
  
     
  useEffect(() => {
    Setisload(true)
  }, []);

  useEffect(() => {
   SetisActiveBlurCards(isHovered)
  }, [isHovered]);//ПРИ НАВЕДЕНИИ НА КАРТОЧКИ ПОЯВЛЯЕТСЯ ЛЕГКИЙ БЛЮР

  const cardsClick = () => {
    SetisClickCards(true);
    SetisHovered(false);
  };//ОТКРЫВАЕМ КАРТОЧКИ

  const butCloseCardsClick = () => {
    SetisClickCards(false);
  };//ЗАКРЫВАЕМ КАРТОЧКИ

  useEffect(() => {
  const loadCircle = setTimeout(() => {
      SetisLoadCircle(true)
    }, 1500);

  return () => clearTimeout(loadCircle)
  }, []);//ТАЙМЕР ДЛЯ АНИМАЦИИ КОЛЬЦА "ОБО МНЕ"
  
  useEffect(() => {
  const touchCards = setTimeout(() => {
      SetisTouchCards(true)
    }, 3500);

return () => clearTimeout(touchCards)
}, []); //ТАЙМЕР ЧТОБЫ НЕЛЬЗЯ БЫЛО ДЕРГАТЬ КАРТОЧКИ ПОКА НЕ ПРОГРУЗИТСЯ СТРАНИЦА



  return (
    <>
      <div className='body'>


        <section className='header'>

          <div className='header-text'> 
            <motion.p 
            variants={variantName}
            initial='initial' 
            animate='animate'
            transition={{duration:0.5, delay:0.4, ease: 'easeOut'}}
            className='name'>
            ПОРОХНЕНКО ВЛАДИСЛАВ ВАЛЕРЬЕВИЧ
            </motion.p>

            <motion.p 
            variants={variantName}
            initial='initial' 
            animate='animate'
            transition={{duration:0.5, delay:0.6, ease: 'easeOut'}}
            className='profession-name'>
            Frontend разработчик
            </motion.p>
          </div>

          <div className='image-face-parent'>
            <motion.img 
            variants={variantName}
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1.3, delay:1.5, ease: 'easeOut'}}
            src={imageFace} className='image-face'>

            </motion.img>
          </div>

        </section>

        
        


        <motion.section 
        onHoverStart={isClickCards ? () => SetisHovered(false) : () => SetisHovered(true)}
        onHoverEnd={() => SetisHovered(false)}
        onClick={cardsClick}
        style={{pointerEvents: isTouchCards ? 'auto' : 'none'}}
        className={isClickCards ? stylesCards.sectionCardsClick : stylesCards.sectionCardsStart}>

          <CardsOne isClickCards={isClickCards} id='1' isHovered={isHovered} isload={isload} />

          <CardsTwo isClickCards={isClickCards} isHovered={isHovered} isload={isload} />

          <CardsThree isClickCards={isClickCards} isHovered={isHovered} isload={isload} />



        
          <motion.div
          className={'absolute left-[50%] translate-x-[-50%] w-[200px] max-w-[22vh] aspect-square'}>

            <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{
              x: isHovered ? 52 : 0,
              y: isHovered ? -30 : 0,
              rotate: isHovered ? 360 : 0,
              opacity: 1,  
            }}
            transition={isload ? {} : {duration: 0.5, delay: 1.8, ease: 'easeOut'}}
            className={isClickCards ? 'invisible' : 'my-info'}
            >
            <p>Обо мне</p>
            </motion.div>

            <motion.div
            //КРУГ
            initial={{opacity: 0}}
            animate={{
              x: isHovered ? 52 : 0,
              y: isHovered ? -30 : 0,
              opacity: 1
            }}
            transition={isload ? {} : {duration: 0.5, delay: 1.7, ease: 'easeOut'}}
            className={isClickCards ? 'invisible' : 'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[83%] h-[83%] rounded-[50%] border-[1.3px] border-[#3a414f] z-[1]'}>
            </motion.div>
          
            <motion.div
            initial={{height: '84%'}}
            animate={{height: '0px'}}
            transition={{duration: 1.3, delay: 2.3, ease: 'easeInOut'}}
            className={isLoadCircle ? 'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#18b09a] w-[85%] z-[2]' : 'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#18b09a] w-[85%] opacity-[0] z-[2]'}>
            </motion.div>



          </motion.div>




        </motion.section>


        <motion.section>

          <CardsBlur isClickCards={isClickCards} isActiveBlurCards={isActiveBlurCards} />

          <FontAwesomeIcon onClick={butCloseCardsClick} className={isClickCards ? stylesCards.cardsCloseBut : 'invisible'} icon={faXmark} />

        </motion.section>


      </div>
    </>
  )
}

const stylesCards = {
  sectionCardsStart: 'relative left-[50%] translate-x-[-50%] w-[25vh] h-[40vh] flex items-center justify-center z-[1]',
  sectionCardsClick:'absolute top-[0] left-[0] right-[0] bottom-[0] flex flex-wrap gap-[15px] justify-around items-center z-[1] overflow-scroll',


  cardsParentStart:
    'w-[100%] h-[40vh] flex justify-center items-center',
  cardsParentClick() {
    if(window.innerWidth < 470 || window.innerHeight < 730) {
      return 'w-[95vw] h-[90vh] flex flex-[1 0 33%] flex-wrap justify-center items-center'
    } else {return 'min-w-[450px] w-[30vw] h-[90vh]  flex flex-[1 0 33%] flex-wrap justify-center items-center'}
  } ,


  cardsStartOne: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] translate-x-[-50%] bg-[#439d99] opacity-[0.6]',
  cardsStartTwo: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] translate-x-[-50%] bg-[#439d99] opacity-[0.6]',
  cardsStartThree: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] translate-x-[-50%] bg-[#439d99] opacity-[0.6]',


  cardsStartOneHover: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] border-[0.3px] border-black translate-x-[-50%] bg-[#439d99] opacity-[0.6]',
  cardsStartTwoHover: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] border-[0.3px] border-black translate-x-[-50%] bg-[#439d99] opacity-[0.6]',
  cardsStartThreeHover: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] border-[0.3px] border-black translate-x-[-50%] bg-[#439d99] opacity-[0.6]',


  cardsClickOne: 'relative w-[95%] h-[95%] rounded-[15px] border-[0.3px] bg-[#439d99] opacity-[0.9] rotate-15 border-[#1d2f35] hover:bg-sky-900',
  cardsClickTwo: 'relative w-[95%] h-[95%] rounded-[15px] border-[0.3px] border-[#1d2f35] bg-[#439d99] opacity-[0.9]',
  cardsClickThree: 'relative w-[95%] h-[95%] rounded-[15px] border-[#1d2f35] border-[0.3px] bg-white hover:bg-sky-700 opacity-[0.9] rotate-345',


  cardsCloseBut: 'fixed min-w-[40px] scale-[1.6] right-[35px] z-1 top-[25px] text-[#17252A] hover:scale-[2] hover:text-[#385059] transition-all'

}

const variantName = {
  initial: {y:30, opacity:0},
  animate: {y:0, opacity:1},
}


const CardsOne = ({isHovered, isload, isClickCards}) =>{ 
        return (  
          <div
          className={isClickCards ? stylesCards.cardsParentClick() : 
            stylesCards.cardsParentStart}>
            <motion.div 
            initial={{opacity: 0, y: 100}}
            animate={{x: isHovered ? -50 : 0,
                      y: isHovered ? -30 : 0,
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? -30 : -15,
                      background: isHovered ? '#0fbaa3' : '#16af99',
                      opacity: isHovered ? 1 : 0.6,
                    }}
            transition={isload ? {} : {duration: 0.5, delay: 0.7, ease:'easeOut'}}
                className={isClickCards ? stylesCards.cardsClickOne : 
                  isHovered ? stylesCards.cardsStartOneHover : stylesCards.cardsStartOne}
            >
            {isClickCards ? <TextInfoOne /> : ''}
            </motion.div>
          </div>
        )
      }   

const CardsTwo = ({isHovered, isload, isClickCards}) => {
        return (
          <div className={isClickCards ? stylesCards.cardsParentClick() : stylesCards.cardsParentStart}>
          <motion.div
          initial={{opacity: 0, y: 100}} 
          animate={{y: isHovered ? -80 : 0,
                    scale: isHovered ? 1.1 : 1,
                    background: isHovered ? '#0fbaa3' : '#16af99',  
                    opacity: isHovered ? 1 : 0.6,
                  }}
          transition={isload ? {} : {duration: 0.5, delay: 1, ease: 'easeOut'}}

          className={isClickCards ? stylesCards.cardsClickTwo : isHovered ? stylesCards.cardsStartTwoHover : stylesCards.cardsStartTwo}
          >
          {isClickCards ? <TextInfoTwo /> : ''}
          </motion.div>
        </div>
        )
      }

const CardsThree = ({isHovered, isload, isClickCards}) => {
        return (
          <div className={isClickCards ? stylesCards.cardsParentClick() : stylesCards.cardsParentStart}>
          <motion.div 
          initial={{y: 100, opacity: 0}}
          animate={{x: isHovered ? 50 : 0,
                    y: isHovered ? -30 : 0,
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 30 : 15,
                    background: isHovered ? '#0fbaa3' : '#16af99',
                    opacity: isHovered ? 1 : 0.6, 
                    }}
          transition={isload ? {} : {duration: 0.5, delay: 1.3, ease: 'easeOut'}}
              className={isClickCards ? stylesCards.cardsClickThree : isHovered ? stylesCards.cardsStartThreeHover : stylesCards.cardsStartThree}
          > 
          {isClickCards ? <TextInfoThree /> : ''}
          </motion.div>
        </div>
        )
      }

const CardsBlur = ({isActiveBlurCards, isClickCards}) => {
  return (

          <motion.div
          className={
            isClickCards ? stylesBlur.blurClickActive :
            isActiveBlurCards ? stylesBlur.blurActive :  stylesBlur.blurUnActive}>
          </motion.div>

  )
}


const TextInfoOne = () => {
    return (
      <section className='info-cards' lang='RU'>
        <p><b>Дата рождения: </b>{myInfo.age}</p>
        <p><b>Место проживания: </b>{myInfo.location}</p>
        <p><b>Образование: </b>{myInfo.education}</p>
        <p><b>Семейное положение: </b>{myInfo.family}</p>
        <p><b>Увлечения: </b>{myInfo.hobbies}</p>
        <p><b>Личные качества: </b>{myInfo.personalQualities}</p>
      </section>
    )
  }

const TextInfoTwo = () => {
  return (
    <section className='info-cards'>
      <p><b>Стек:</b></p>
        <ul className='list-two-card'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vite</li>
          <li>Git</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Основы UI/UX дизайна</li>
        </ul>
    </section>
  )
}

const TextInfoThree = () => {
  return (
    <section className='info-cards' lang='RU'>
      <p>Геодезист по образованию, архитектор-градостроитель по крайнему месту работы, фронденд разработчик сейчас и в будущем.<br /> Креативный, жизнерадостный, позитивный, дружелюбный, усердный, иногда слишком дотошный, творческий.<br /> Полон желания учиться, перенимать опыт, познавать новое, создавать.</p>
      <ul className='flex flex-col gap-[10px]'>
        <li><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;&nbsp;8 (916)-848-31-61</li>
        <a><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;poroxnenko_official@bk.ru</a>
      </ul>
      <img src={imageNice} />
    </section>
  )
}


const stylesBlur = {
  blurUnActive: 'fixed top-[0] left-[0] h-[100vh] w-[100vw]  backdrop-blur-xs bg-black/30 z-[0] opacity-[0] transition-all duration-300',
  blurActive: 'fixed top-[0] left-[0] h-[100vh] w-[100vw] backdrop-blur-xs bg-black/30 z-[0] transition-all duration-300',
  blurClickActive: 'fixed top-[0] left-[0] h-[100vh] w-[100vw] backdrop-blur-xl bg-black/50 z-[0] transition-all duration-300',
}


const myInfo = {
  age: '31.05.2000',
  location: 'город Москва',
  education: 'высшее (Государственный Университет по Землеустройству, Прикладная геодезия, 2022 год)',
  family: 'женат',
  hobbies: 'тренажерный зал, большой тенис, музыка, катание на сноуборде, просмотр кино, времяпровождение с любимой женой',
  personalQualities: 'ответственность, коммуникабельность, стрессоустойчивость, креативность, самообучаемость',
}