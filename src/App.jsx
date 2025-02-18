import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import './App.css'


export default function App() {

  const [isHovered, SetisHovered] = useState(false);
  const [isload, Setisload] = useState(false);

  useEffect(() => {
    Setisload(true)
  }, []);


  return (
    <>
      <div className='body'>


        <section className='header-left'>

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
          FRONTEND разработчик
          </motion.p>

        </section>


        <motion.section 
        onHoverStart={() => SetisHovered(true)}
        onHoverEnd={() => SetisHovered(false)}
        className='absolute left-[50%] translate-x-[-50%] w-[25vh] h-[30vh] flex justify-around items-center'>

        <CardsOne isHovered={isHovered} isload={isload} />

        <CardsTwo isHovered={isHovered} isload={isload} />

        <CardsThree isHovered={isHovered} isload={isload} />

        </motion.section>

        <motion.section>
          <motion.div className='absolute w-[100vw] h-[100vh] translate-y-[-60%] bg-black/30 backdrop-blur-xs z-[1]'>
          </motion.div>
          {/* СЕЙЧАС У БЛЮРА ЗЕТ ИНДЕКС ВЫШЕ ВСЕХ, НАДО СДЕЛАТЬ ТАК, ЧТОБЫ ПРИ НАВЕДЕНИИ НА КАРТОЧКИ ДЕЛАЛСЯ ПОД КАРТОЧКАМИ НЕБОЛЬШОЙ БЛЮР, А ПРИ НАЖАТИИ ДЕЛАЛСЯ ЕЩЕ БОЛЬШЕ БЛЮР */}
        </motion.section>

      

      </div>
    </>
  )
}

const styles = {
  sectionCardsTouch: 'w-[100%] h-[40vh] flex justify-around items-center',
  cardsParent:
    'w-[30%] h-[40vh] flex justify-center items-center',
  cardsActive: 
    'w-[45vh] h-[30vh] rounded-[15px] bg-[#439d99] opacity-[0.2]',
  cardsStartOne: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] translate-x-[-50%] translate-y-[10%] bg-[#439d99] opacity-[0.6]',
  cardsStartTwo: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px]  translate-x-[-50%] translate-y-[10%] bg-[#439d99] opacity-[0.6]',
  cardsStartThree: 'absolute left-[50%] w-[25vh] h-[30vh] rounded-[15px] translate-x-[-50%] translate-y-[10%] bg-[#439d99] opacity-[0.6]',
}

const variantName = {
  initial: {y:30, opacity:0},
  animate: {y:0, opacity:1},
}


const CardsOne = ({isHovered, isload}) =>{ 
        return (  
          <div className={styles.cardsParent}>
            <motion.div 
            initial={{opacity: 0, y: 100}}
            animate={{x: isHovered ? -50 : 0,
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? -30 : -15,
                      background: isHovered ? '#55a6a3' : '#439d99',
                      opacity:0.6, y:0
                    }}
            transition={isload ? {} : {duration: 0.5, delay: 0.7, ease:'easeOut'}}
            className={styles.cardsStartOne}>
            </motion.div>
          </div>
        )
      }   

const CardsTwo = ({isHovered, isload}) => {
        return (
          <div className={styles.cardsParent}>
          <motion.div
          initial={{opacity: 0, y: 100}} 
          animate={{y: isHovered ? -50 : 0,
                    scale: isHovered ? 1.1 : 1,
                    background: isHovered ? '#55a6a3' : '#439d99',  
                    opacity: 0.6,
                  }}
          transition={isload ? {} : {duration: 0.5, delay: 1, ease: 'easeOut'}}
          className={styles.cardsStartTwo}>

          </motion.div>
        </div>
        )
      }

const CardsThree = ({isHovered, isload}) => {
        return (
          <div className={styles.cardsParent}>
          <motion.div 
          initial={{y: 100, opacity: 0}}
          animate={{x: isHovered ? 50 : 0,
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 30 : 15,
                    background: isHovered ? '#55a6a3' : '#439d99',
                    opacity: 0.6, y: 0
                    }}
          transition={isload ? {} : {duration: 0.5, delay: 1.3, ease: 'easeOut'}}
          className={styles.cardsStartThree}> 

          </motion.div>
        </div>
        )
      }

const CardsBlur = ({isActiveBlurCards}) => {
  return (

          <motion.div 
          // animate={ПРОПИСАТЬ ВАРИАНТЫ БЛЮРА ЧТОБЫ БЫЛА ПЛАВНАЯ АНИМАЦИЯ}
          className={isActiveBlurCards ? 'absolute w-[100vw] h-[100vh] translate-y-[-60%] backdrop-blur-xs bg-black/30 z-[0]' : 'none'}>
          </motion.div>

  )
}