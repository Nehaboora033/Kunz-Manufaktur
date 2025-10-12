import React, { useState } from 'react'
import Container from './common/Container'
import { useTranslation } from 'react-i18next'
import SectionText from './common/SectionText'
import { Footer_Info, Social_Links, Tabs, Talk_Contact } from '../utils/helper'
import { Link } from 'react-router-dom'
import Text from './common/Text'
import flower from '../assets/webp/whiteflower.webp'
import Input from './common/Input'
import CountryInput from './common/CountryInput'
import Subsheading from './common/Subsheading'
import GreenButton from './common/GreenButton'

const Lass = () => {

  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const initialValues = {
    firstName: '',
    emailAddress: '',
    phoneNumber: '',
    send: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);
    setFormErrors(errors);

    console.log('Form Values:', formValues);
    console.log('Validation Errors:', errors);

    if (Object.keys(errors).length === 0) {
      console.log('✅ Form submitted successfully!');

      // ✅ Reset form values
      setFormValues(initialValues);
      setActiveIndex(0); // optional – reset the selected tab if you want
    } else {
      console.log('❌ Form submission failed due to errors.');
    }
  };

  const validate = (values) => {
    const errors = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!values.firstName) errors.firstName = 'Missing First Name'
    if (!values.phoneNumber) errors.phoneNumber = 'Missing Phone Number'
    if (!values.emailAddress) errors.emailAddress = 'Missing Email'
    else if (!emailRegex.test(values.emailAddress))
      errors.emailAddress = 'Invalid Email format!'
    if (!values.send.trim()) errors.send = 'Message cannot be empty';

    return errors
  }

  return (
    <div className="lg:py-[100px] py-[60px]">
      <Container className="overflow-hidden">
        {/* Heading Section */}
        <Subsheading className="text-center mb-[24px] green">
          {t('talk.title')}
        </Subsheading>
        <SectionText className="text-center mb-[60px] black">
          {t('talk.data')}
        </SectionText>

        {/* Form Section */}
        <div className="md:rounded-[40px] rounded-[20px] bg-green xl:py-[80px] xl:px-[100px] md:p-8 p-4">
          <div className="flex justify-between xl:gap-[100px] gap-[30px] max-lg:flex-col gap-y-[50px]">

            {/* Left - Form */}
            <div data-aos="zoom-out-up" className="lg:max-w-[821px] w-full bg-[#F9FAFB] md:rounded-[40px] rounded-[20px] md:p-[40px] p-4">
              <form id="contact-form" onSubmit={handleSubmit}>
                {/* Name */}
                <Input
                  type="text"
                  placeholder={t('placeholder.fullname')}
                  label={t('talk.name')}
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  error={formErrors.firstName}
                />

                {/* Email & Phone */}
                <div className="flex gap-[32px] mt-[24px] max-[1350px]:flex-col gap-y-[24px]">
                  <Input
                    type="email"
                    placeholder={t('placeholder.email')}
                    label={t('talk.email')}
                    name="emailAddress"
                    value={formValues.emailAddress}
                    onChange={handleChange}
                    error={formErrors.emailAddress}
                  />

                  {/* Telephone input */}
                  <CountryInput
                    label={t('talk.phonenumber')}
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    error={formErrors.phoneNumber}
                  />
                </div>

                {/* Tabs */}
                <div className="my-6">
                  <h4 className="font-medium text-[17.67px] leading-[150%] black mb-4">
                    {t('talk.interested')}
                  </h4>

                  <div
                    className="
                      flex gap-2 sm:gap-4
                      overflow-x-auto sm:overflow-visible
                      flex-nowrap sm:flex-wrap
                      hide-scrollbar
                      [-webkit-overflow-scrolling:touch]
                    "
                  >
                    {Tabs.map((item, index) => {
                      const isActive = index === activeIndex;

                      return (
                        <div
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`
              px-4 py-[10px] rounded-[50px] transition-all duration-300 whitespace-nowrap
              font-normal text-[16px] leading-[20px] cursor-pointer border border-[#454544]
              ${isActive
                              ? 'bggreen text-white  '       // Active tab
                              : ' black bg-transparent' // Normal tab
                            }
            `}
                        >
                          {t(item.name)}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[20px] mb-[10px] black"
                    htmlFor="send"
                  >
                    {t('message.title')}
                  </label>
                  <textarea
                    className={`border border-[#FAFAFA] bg-white placeholder-[#454544] md:rounded-[20px] rounded-[10px] resize-none md:h-[166px] h-[140px] py-4 px-3 ${formErrors.send ? 'border-red-500' : 'border-[#E0E0E0]'
                      }`}
                    name="send"
                    placeholder={t('message.text')}
                    value={formValues.send}
                    onChange={handleChange}
                  />
                  {formErrors.send && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.send}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <GreenButton className={' mt-6 w-full'}>
                  {t('talk.buttontext')}
                </GreenButton>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:max-w-[480px] w-full text-white relative">
              {/* Contact Us */}
              <div className="w-full">
                <h4 className="font-bold lg:mb-[32px] mb-5 lg:text-[21.33px] text-[20px] leading-[32px] ">
                  {t('linkcontact.title')}
                </h4>
                {Talk_Contact.map((item, index) => (
                  <Link className="mb-1" key={index} to={item.href}>
                    <h4 className='font-normal lg:text-[21.33px] text-[16px] leading-[32px]'>{t(item.key)}</h4>
                  </Link>
                ))}
              </div>

              {/* Opening Times */}
              <div className="w-full py-[40px]">
                <h4 className="font-bold lg:mb-[32px] mb-5 lg:text-[21.33px] text-[20px] leading-[32px]">
                  {t('linkopening.title')}
                </h4>
                {Footer_Info.map((item, index) => (
                  <div className="mb-1" key={index}>
                    <h4 className="whitespace-nowrap font-normal lg:text-[21.33px] text-[16px] leading-[32px]">{t(item.key)}</h4>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-[24px] max-lg:mb-[20px]">
                {Social_Links.map((item, index) => (
                  <div
                    key={index}
                    className="transition-transform duration-300 hover:-translate-y-2 p-[26.5px]"
                  >

                    <Link
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon />
                    </Link>

                  </div>
                ))}
              </div>

              {/* Flower Image */}
              <img data-aos="fade-up"
                src={flower}
                alt="flower"
                className="object-cover absolute min-[1350px]:bottom-[-80px] min-[1350px]:-right-[100px] bottom-[-90px] right-[-30px] w-[360px] h-[560px] max-sm:hidden block pointer-events-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Lass