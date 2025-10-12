import Container from './common/Container'
import Description from './common/Description'
import { useTranslation } from 'react-i18next'
import flower from '../assets/png/greyflower.png'
import Subsheading from './common/Subsheading'
import GreenButton from './common/GreenButton'
import TransparentButton from './common/TransparentButton'

const Bereit = () => {
    const { t } = useTranslation()
    return (
        <div className='lg:py-[80px] py-[60px]'>
            <Container className={''}>

                <div className='w-full md:rounded-[40px] rounded-[20px] sm:py-[87px] py-[40px] md:px-[30px] px-3 bgberit border border-[#ECF1EE] bg-no-repeat  overflow-hidden bg-cover shadow-box relative after:rounded-[40px] after:content-[" "] after:absolute  after:z-0  after-img ' >
                    <img
                        src={flower}
                        alt="Floral background visual"
                        className="absolute inset-y-0 right-[-250px] w-full h-full object-cover object-right opacity-100 pointer-events-none sm:block hidden"
                    />
                    <div className='relative flex z-[10] flex-col items-center justify-center'>
                        <Subsheading className={'mb-[24px] text-center darkgreen'}>
                            {t('journey.title')}
                        </Subsheading>
                        <Description className={'text-center mb-[24px] max-w-[932px] black '}>
                            {t('journey.data')}
                        </Description>
                        <div className='flex items-center justify-center gap-[17.82px] flex-wrap '>
                            <GreenButton>
                                {t('journeybutton.buttontext1')}
                            </GreenButton>
                            <TransparentButton>
                                {t('journeybutton.buttontext2')}
                            </TransparentButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Bereit