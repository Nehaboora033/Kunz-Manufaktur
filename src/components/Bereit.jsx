import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import { GreenArrow, WhiteArrow } from '../utils/icons'
import { useTranslation } from 'react-i18next'
import flower from '../assets/png/greyflower.png'

const Bereit = () => {
    const { t } = useTranslation()
    return (
        <div className='pt-[80px]'>
            <Container className={''}>

                <div className='w-full rounded-[40px] py-[87px] md:px-[30px] px-3 bg-[#EFF3F1] border border-[#ECF1EE] bg-no-repeat  overflow-hidden bg-cover shadow-box relative after:rounded-[40px] after:content-[" "] after:absolute  after:z-0  after-img ' >
                    <img
                        src={flower}
                        alt="Floral background visual"
                        className="absolute inset-y-0 right-[-250px] w-full h-full object-cover object-right opacity-100 pointer-events-none sm:block hidden"
                    />
                    <div className='relative flex z-[10] flex-col items-center justify-center'>
                        <SubHeading className={'mb-[24px] text-center'}>
                            {t('journey.title')}
                        </SubHeading>
                        <Description className={'text-center mb-[24px] max-w-[932px] black'}>
                            {t('journey.data')}
                        </Description>
                        <div className='flex items-center justify-center gap-[17.82px] flex-wrap '>
                            <Button className={'flex gap-[11px] bggreen text-white items-center '}>
                                {t('journeybutton.buttontext1')}
                                <WhiteArrow />
                            </Button>
                            <Button className={'flex gap-[11px] border-[1.27px] !py-[19px] items-center border-[#3E7651]  text-[#3E7651] '}>
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