import React, { useState } from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import { useTranslation } from 'react-i18next'
import SectionText from './common/SectionText'
import { Footer_Info, Social_Links, Tabs, Talk_Contact } from '../utils/helper'
import { Link } from 'react-router-dom'
import Text from './common/Text'
import flower from '../assets/webp/whiteflower.webp'
import Button from './common/Button'
import Input from './common/Input'

const Lass = () => {
  const { t } = useTranslation()

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
    e.preventDefault()
    const errors = validate(formValues)
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log('✅ Form submitted:', formValues)

      // ✅ Log placeholder values of inputs and textarea
      const inputs = document.querySelectorAll('input, textarea')
      inputs.forEach((input) => {
        console.log(`Placeholder for ${input.name || 'unnamed'}: ${input.placeholder}`)
      })
    }
  }

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
    <div className="py-[100px]">
      <Container className="overflow-hidden">
        {/* Heading Section */}
        <SubHeading className="text-center mb-[24px]">
          {t('talk.title')}
        </SubHeading>
        <SectionText className="text-center mb-[60px]">
          {t('talk.data')}
        </SectionText>

        {/* Form Section */}
        <div className="rounded-[40px] bg-green xl:py-[80px] xl:px-[100px] p-4">
          <div className="flex justify-between xl:gap-[100px] gap-[30px] max-lg:flex-col gap-y-[50px]">

            {/* Left - Form */}
            <div className="lg:max-w-[821px] w-full bg-[#F9FAFB] rounded-[40px] md:p-[40px] p-4">
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
                  <Input
                    placeholder="+49 123456789"
                    type="tel"
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
                    {Tabs.map((item, index) => (
                      <Button
                        key={index}
                        className={`
                          !px-4 !py-[10px] !rounded-[50px]
                          transition-all duration-200
                          !font-normal !text-[16px] !leading-[20px]
                          ${index === 0
                            ? 'bggreen text-white border-none'
                            : 'border border-[#454544] text-black bg-transparent'
                          }
                        `}
                      >
                        {t(item.name)}
                      </Button>
                    ))}
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
                    className={`border border-[#FAFAFA] bg-white placeholder-[#454544] rounded-[20px] resize-none h-[166px] py-4 px-3 ${formErrors.send ? 'border-red-500' : 'border-[#E0E0E0]'
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
                <Button className="bggreen text-white !py-[16px] w-full mt-6">
                  {t('talk.buttontext')}
                </Button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:max-w-[480px] w-full text-white relative">
              {/* Contact Us */}
              <div className="w-full">
                <Text className="!font-bold mb-[32px]">
                  {t('linkcontact.title')}
                </Text>
                {Talk_Contact.map((item, index) => (
                  <Link className="mb-1" key={index} to={item.href}>
                    <Text>{t(item.key)}</Text>
                  </Link>
                ))}
              </div>

              {/* Opening Times */}
              <div className="w-full py-[40px]">
                <Text className="!font-bold mb-[32px]">
                  {t('linkopening.title')}
                </Text>
                {Footer_Info.map((item, index) => (
                  <div className="mb-1" key={index}>
                    <Text className="whitespace-nowrap">{t(item.key)}</Text>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-[79.5px]">
                {Social_Links.map((item, index) => (
                  <div key={index}>
                    <Link to={item.link}>
                      <item.icon />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Flower Image */}
              <img
                src={flower}
                alt="flower"
                className="object-cover absolute lg:bottom-[-80px] lg:right-[-180px] bottom-[-30px] right-[-100px] max-lg:w-[400px] max-md:w-[300px] max-sm:hidden block"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Lass