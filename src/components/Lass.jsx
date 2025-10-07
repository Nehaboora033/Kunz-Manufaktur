import React, { useState } from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import { useTranslation } from 'react-i18next'
import SectionText from './common/SectionText'
import { Footer_Info, Social_Links, Tabs, Talk_Contact } from '../utils/helper'
import { Form, Link } from 'react-router-dom'
import Text from './common/Text'
import flower from '../assets/webp/whiteflower.webp'
import Button from './common/Button'
import Input from './common/Input'

const Lass = () => {
  const initialValues = {
    firstName: '',
    emailAddress: '',
    send: '',

  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formValues);
      // Submit logic here
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.firstName) errors.firstName = 'Missing First Name';
    if (!values.lastName) errors.lastName = 'Missing Last Name';
    if (!values.phoneNumber) errors.phoneNumber = 'Missing Phone Number';
    if (!values.emailAddress) errors.emailAddress = 'Missing Email';
    else if (!emailRegex.test(values.emailAddress)) errors.emailAddress = 'Invalid Email format!';
    if (!values.send) errors.send = 'Message cannot be empty';

    return errors;
  };

  const { t } = useTranslation();
  return (
    <div className='py-[100px]'>
      <Container>
        <SubHeading className={'text-center mb-[24px]'}>
          {t('talk.title')}
        </SubHeading>
        <SectionText className={'text-center mb-[60px]'}>
          {t('talk.data')}
        </SectionText>
        <div className='rounded-[40px] bg-green py-[80px] px-[100px]'>
          <div className='flex justify-between gap-[100px]'>
            <div className='max-w-[821px] w-full bg-[#F9FAFB]  rounded-[40px] p-[40px]'>
              <form onSubmit={handleSubmit}>
                {/* name */}
                <Input
                  type='text'
                  placeholder={t("placeholder.fullname")}
                  label={t("talk.name")}
                  name='firstName'
                  value={formValues.firstName}
                  onChange={handleChange}
                  error={formErrors.firstName}
                />

                <div className='flex gap-[32px] mt-[24px] '>
                  <Input
                    type='email'
                    placeholder={t("placeholder.email")}
                    label={t("talk.email")}
                    name='emailAddress'
                    value={formValues.emailAddress}
                    onChange={handleChange}
                    error={formErrors.emailAddress}
                  />
                  <Input
                    placeholder='+49 123456789'
                    type='tel'
                    label={t('talk.phonenumber')}
                    name='phoneNumber'
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    error={formErrors.phoneNumber}
                  />
                </div>

                {/* tabs */}
                <div className='my-6 '>
                  <h4 className='font-medium text-[17.67px] leading-[150%] black mb-4'>
                    {t('talk.interested')}
                  </h4>
                  <div className='flex gap-4 flex-wrap'>
                    {Tabs.map((item, index) => {
                      return (
                        <Button className={`!px-4 !py-[10px] !rounded-[50px] transition-all duration-200 !font-normal !text-[16px] !leading-[20px]
      ${index === 0
                            ? 'bggreen text-white border-none'
                            : 'border border-[#454544] text-black bg-transparent'}
    `} key={index}>
                          {t(item.name)}
                        </Button>
                      )
                    })}
                  </div>
                </div>
                {/* message */}
                <div className='flex flex-col'>
                  <label className='font-normal  text-[16px] leading-[20px] mb-[10px] black' htmlFor='send'>{t('message.title')} </label>
                  <textarea
                    className={`border border-[#FAFAFA] bg-white rounded-[20px] resize-none h-[166px] py-4 px-3 ${formErrors.send ? 'border-red-500' : 'border-[#E0E0E0]'}`}
                    name='send'
                    placeholder={t('message.text')}
                    value={formValues.send}
                    onChange={handleChange}
                  />
                  {formErrors.send && <p className='text-red-500 text-sm mt-1'>{formErrors.send}</p>}
                </div>
                {/* button */}
                <Button className={'bggreen text-white !py-[16px] w-full mt-6'}>
                  {t("talk.buttontext")}
                </Button>

              </form>
            </div>
            <div className='max-w-[480px] w-full text-white relative '>
              {/* contact us */}
              <div className='w-full'>
                <Text className='!font-bold  mb-[32px]'>
                  {t('linkcontact.title')}
                </Text>
                {Talk_Contact.map((item, index) => (
                  <Link className='mb-1' key={index} to={item.href}>
                    <Text>
                      {t(item.key)}
                    </Text>
                  </Link>
                ))}
              </div>
              {/* opening timing */}
              <div className='w-full py-[40px]'>
                <Text className='!font-bold  mb-[32px]'>
                  {t('linkopening.title')}
                </Text>
                {Footer_Info.map((item, index) => (
                  <div className='mb-1' key={index} >
                    <Text className={'whitespace-nowrap'}>
                      {t(item.key)}
                    </Text>
                  </div>
                ))}
              </div>
              {/* social links */}
              <div className='flex gap-[79.5px]'>
                {Social_Links.map((item, index) => (
                  <div key={index} className=''>
                    <Link to={item.link}>
                      <item.icon />
                    </Link>
                  </div>
                ))}
              </div>
              {/* Flower */}
              <img src={flower} alt="flower" className='object-cover absolute bottom-[-80px] right-[-180px] ' />
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default Lass