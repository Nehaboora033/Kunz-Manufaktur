import Container from './common/Container'
import Description from './common/Description'
import Button from './common/Button'
import { GreenArrow, WhiteArrow } from '../utils/icons'
import { useTranslation } from 'react-i18next'
import flower from '../assets/png/greyflower.png'
import Subsheading from './common/Subsheading'

const Bereit = () => {
    const { t } = useTranslation()
    return (
        <div className='sm:py-[80px] py-[60px]'>
            <Container className={''}>

                <div className='w-full rounded-[40px] sm:py-[87px] py-[60px] md:px-[30px] px-3 bg-[#EFF3F1] border border-[#ECF1EE] bg-no-repeat  overflow-hidden bg-cover shadow-box relative after:rounded-[40px] after:content-[" "] after:absolute  after:z-0  after-img ' >
                    <img
                        src={flower}
                        alt="Floral background visual"
                        className="absolute inset-y-0 right-[-250px] w-full h-full object-cover object-right opacity-100 pointer-events-none sm:block hidden"
                    />
                    <div className='relative flex z-[10] flex-col items-center justify-center'>
                        <Subsheading className={'mb-[24px] text-center'}>
                            {t('journey.title')}
                        </Subsheading>
                        <Description className={'text-center mb-[24px] max-w-[932px] black'}>
                            {t('journey.data')}
                        </Description>
                        <div className='flex items-center justify-center gap-[17.82px] flex-wrap '>
                            <Button className={'flex sm:gap-[11px] gap-2 bggreen text-white items-center h-[56px]'}>
                                {t('journeybutton.buttontext1')}
                                <WhiteArrow />
                            </Button>
                            <Button className={'flex sm:gap-[11px] gap-2 border-[1.27px]  h-[56px] items-center border-[#3E7651]  text-[#3E7651] '}>
                                {t('journeybutton.buttontext2')}
                                <GreenArrow />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Bereit