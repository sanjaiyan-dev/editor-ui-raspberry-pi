import React from 'react';
import { useCookies } from 'react-cookie';

const fontScaleFactors = {'small': 1, 'medium': 1.44, 'large': 2.074}

export const ChevronDown = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8.37498L0 2.37498L1.4 0.974976L6 5.57498L10.6 0.974976L12 2.37498L6 8.37498Z"/>
    </svg>
  )
}

export const CloseIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"/>
    </svg>
  )
}

export const DownloadIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM0 16V11H2V14H14V11H16V16H0Z"/>
    </svg>
  )
}

export const EllipsisVerticalIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16C1.45 16 0.979334 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14C0 13.45 0.196 12.979 0.588 12.587C0.979334 12.1957 1.45 12 2 12C2.55 12 3.021 12.1957 3.413 12.587C3.80433 12.979 4 13.45 4 14C4 14.55 3.80433 15.021 3.413 15.413C3.021 15.8043 2.55 16 2 16ZM2 10C1.45 10 0.979334 9.804 0.588 9.412C0.196 9.02067 0 8.55 0 8C0 7.45 0.196 6.979 0.588 6.587C0.979334 6.19567 1.45 6 2 6C2.55 6 3.021 6.19567 3.413 6.587C3.80433 6.979 4 7.45 4 8C4 8.55 3.80433 9.02067 3.413 9.412C3.021 9.804 2.55 10 2 10ZM2 4C1.45 4 0.979334 3.804 0.588 3.412C0.196 3.02067 0 2.55 0 2C0 1.45 0.196 0.979333 0.588 0.588C0.979334 0.196 1.45 0 2 0C2.55 0 3.021 0.196 3.413 0.588C3.80433 0.979333 4 1.45 4 2C4 2.55 3.80433 3.02067 3.413 3.412C3.021 3.804 2.55 4 2 4Z"/>
    </svg>
  )
}

export const FileIcon = (props) => {
  const {scaleFactor} = props
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * (scaleFactor || 1)
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20V0H10L16 6V20H0ZM9 7V2H2V18H14V7H9ZM2 2V7V2V18V2Z"/>
    </svg>
  )
}

export const FontIcon = (props) => {
  const {size} = props
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width={`${size}`} height={`${size}`} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.317 0.0253907C4.782 0.0253907 5.199 0.310391 5.367 0.745391L7.7085 6.81739L6.5025 9.92239C6.48286 9.8849 6.46533 9.84634 6.45 9.80689L5.994 8.62489H2.64L2.184 9.80689C2.07659 10.0854 1.86295 10.3098 1.59008 10.4307C1.31722 10.5517 1.00748 10.5593 0.728998 10.4519C0.450521 10.3445 0.226119 10.1308 0.105158 9.85798C-0.0158029 9.58511 -0.0234144 9.27537 0.0839983 8.99689L3.2685 0.745391C3.35031 0.533367 3.49442 0.351093 3.68185 0.222571C3.86928 0.0940482 4.09124 0.0253041 4.3185 0.0253907H4.317ZM3.507 6.37489H5.127L4.317 4.27489L3.507 6.37489ZM12.3 3.72889C12.2186 3.51617 12.0746 3.33316 11.887 3.20406C11.6994 3.07495 11.477 3.00582 11.2492 3.00582C11.0215 3.00582 10.7991 3.07495 10.6115 3.20406C10.4239 3.33316 10.2799 3.51617 10.1985 3.72889L5.601 15.7499C5.30263 15.7535 5.0179 15.8754 4.80946 16.0889C4.60101 16.3025 4.48592 16.59 4.4895 16.8884C4.49308 17.1868 4.61504 17.4715 4.82855 17.6799C5.04206 17.8884 5.32963 18.0035 5.628 17.9999H6.309C6.35495 18.0028 6.40104 18.0028 6.447 17.9999L7.8795 17.9954C8.16669 17.9956 8.44309 17.886 8.65206 17.6889C8.86102 17.4919 8.98673 17.2225 9.00341 16.9357C9.0201 16.649 8.9265 16.3668 8.7418 16.1469C8.5571 15.927 8.29528 15.786 8.01 15.7529L8.5845 14.2529H13.917L14.496 15.7649C14.2106 15.798 13.9487 15.9391 13.7639 16.1592C13.5792 16.3792 13.4857 16.6617 13.5026 16.9485C13.5195 17.2353 13.6455 17.5048 13.8547 17.7017C14.064 17.8986 14.3407 18.008 14.628 18.0074L16.878 18.0014C17.1764 18.0042 17.4636 17.8883 17.6766 17.6793C17.8895 17.4703 18.0107 17.1853 18.0135 16.8869C18.0163 16.5885 17.9004 16.3013 17.6914 16.0883C17.4824 15.8754 17.1974 15.7542 16.899 15.7514L15.777 12.8189C15.759 12.7554 15.7354 12.6937 15.7065 12.6344L12.3015 3.73039L12.3 3.72889ZM13.056 11.9999H9.444L11.25 7.27939L13.056 11.9999Z"/>
    </svg>
  )
}

export const HomeIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"/>
    </svg>
  )
}

export const HumidityIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 16C10.9167 16 11.2707 15.854 11.562 15.562C11.854 15.2707 12 14.9167 12 14.5C12 14.0833 11.854 13.7293 11.562 13.438C11.2707 13.146 10.9167 13 10.5 13C10.0833 13 9.72933 13.146 9.438 13.438C9.146 13.7293 9 14.0833 9 14.5C9 14.9167 9.146 15.2707 9.438 15.562C9.72933 15.854 10.0833 16 10.5 16ZM5.45 15.95L11.95 9.45L10.55 8.05L4.05 14.55L5.45 15.95ZM5.5 11C5.91667 11 6.27067 10.854 6.562 10.562C6.854 10.2707 7 9.91667 7 9.5C7 9.08333 6.854 8.72933 6.562 8.438C6.27067 8.146 5.91667 8 5.5 8C5.08333 8 4.72933 8.146 4.438 8.438C4.146 8.72933 4 9.08333 4 9.5C4 9.91667 4.146 10.2707 4.438 10.562C4.72933 10.854 5.08333 11 5.5 11ZM8 20C5.71667 20 3.81267 19.2167 2.288 17.65C0.762667 16.0833 0 14.1333 0 11.8C0 10.1333 0.662667 8.321 1.988 6.363C3.31267 4.40433 5.31667 2.28333 8 0C10.6833 2.28333 12.6877 4.40433 14.013 6.363C15.3377 8.321 16 10.1333 16 11.8C16 14.1333 15.2373 16.0833 13.712 17.65C12.1873 19.2167 10.2833 20 8 20ZM8 18C9.73333 18 11.1667 17.4127 12.3 16.238C13.4333 15.0627 14 13.5833 14 11.8C14 10.5833 13.496 9.20833 12.488 7.675C11.4793 6.14167 9.98333 4.46667 8 2.65C6.01667 4.46667 4.521 6.14167 3.513 7.675C2.50433 9.20833 2 10.5833 2 11.8C2 13.5833 2.56667 15.0627 3.7 16.238C4.83333 17.4127 6.26667 18 8 18Z"/>
    </svg>
  )
}

export const MoonIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.625 0 11.5 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C9.23333 0 9.46267 0.00833343 9.688 0.0250001C9.91267 0.0416668 10.1333 0.0666666 10.35 0.0999999C9.66667 0.583333 9.121 1.21233 8.713 1.987C8.30433 2.76233 8.1 3.6 8.1 4.5C8.1 6 8.625 7.275 9.675 8.325C10.725 9.375 12 9.9 13.5 9.9C14.4167 9.9 15.2583 9.69567 16.025 9.287C16.7917 8.879 17.4167 8.33333 17.9 7.65C17.9333 7.86667 17.9583 8.08733 17.975 8.312C17.9917 8.53733 18 8.76667 18 9C18 11.5 17.125 13.625 15.375 15.375C13.625 17.125 11.5 18 9 18ZM9 16C10.4667 16 11.7833 15.596 12.95 14.788C14.1167 13.9793 14.9667 12.925 15.5 11.625C15.1667 11.7083 14.8333 11.775 14.5 11.825C14.1667 11.875 13.8333 11.9 13.5 11.9C11.45 11.9 9.704 11.1793 8.262 9.738C6.82067 8.296 6.1 6.55 6.1 4.5C6.1 4.16667 6.125 3.83333 6.175 3.5C6.225 3.16667 6.29167 2.83333 6.375 2.5C5.075 3.03333 4.021 3.88333 3.213 5.05C2.40433 6.21667 2 7.53333 2 9C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z"/>
    </svg>
  )
}

export const NewFileIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z"/>
    </svg>

  )
}

export const PencilIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1)
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3043 0.75 14.863 0.75C15.421 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.571 18.275 4.113C18.2917 4.65433 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4ZM11.325 7.675L10.625 6.975L12.025 8.375L11.325 7.675Z"/>
    </svg>
  )
}

export const PressureIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * 1.6
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M8.752 7.001a1 1 0 0 1-1.971.237c-.062-.252-.123-.52-.307-.704L5.411 5.471a.5.5 0 1 1 .707-.707l.957.957c.207.207.52.25.81.29a1 1 0 0 1 .867.99Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.75 6.75a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0zm-1 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0z"/>
        <path d="M6.252 10.5h2.5v.75a1.25 1.25 0 1 1-2.5 0z"/>
      </g>
    </svg>
  )
}

export const ResetIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0H16V2H13.25L13.65 2.35C14.4667 3.16667 15.0627 4.054 15.438 5.012C15.8127 5.97067 16 6.95 16 7.95C16 9.8 15.4457 11.4457 14.337 12.887C13.229 14.329 11.7833 15.2833 10 15.75V13.65C11.2 13.2167 12.1667 12.4793 12.9 11.438C13.6333 10.396 14 9.23333 14 7.95C14 7.2 13.8583 6.47067 13.575 5.762C13.2917 5.054 12.85 4.4 12.25 3.8L12 3.55V6H10V0ZM6 16H0V14H2.75L2.35 13.65C1.48333 12.8833 0.875 12.0083 0.525 11.025C0.175 10.0417 0 9.05 0 8.05C0 6.2 0.554 4.554 1.662 3.112C2.77067 1.67067 4.21667 0.716667 6 0.25V2.35C4.8 2.78333 3.83333 3.52067 3.1 4.562C2.36667 5.604 2 6.76667 2 8.05C2 8.8 2.14167 9.529 2.425 10.237C2.70833 10.9457 3.15 11.6 3.75 12.2L4 12.45V10H6V16Z"/>
    </svg>
  )
}

export const RunIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z"/>
    </svg>
  )
}

export const SettingsIcon = () => {
  const [cookies] = useCookies(['fontSize', 'theme'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z"/>
    </svg>
  )
}

export const SplitViewIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * 4/5
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8ZM13 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H13V7ZM11 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H11V7Z"/>
    </svg>
  )
}

export const StopIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2V10V2ZM0 12V0H12V12H0ZM2 10H10V2H2V10Z"/>
    </svg>
  )
}

export const SunIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 14C11.8333 14 12.5417 13.7083 13.125 13.125C13.7083 12.5417 14 11.8333 14 11C14 10.1667 13.7083 9.45833 13.125 8.875C12.5417 8.29167 11.8333 8 11 8C10.1667 8 9.45833 8.29167 8.875 8.875C8.29167 9.45833 8 10.1667 8 11C8 11.8333 8.29167 12.5417 8.875 13.125C9.45833 13.7083 10.1667 14 11 14ZM11 16C9.61667 16 8.43767 15.5123 7.463 14.537C6.48767 13.5623 6 12.3833 6 11C6 9.61667 6.48767 8.43733 7.463 7.462C8.43767 6.48733 9.61667 6 11 6C12.3833 6 13.5627 6.48733 14.538 7.462C15.5127 8.43733 16 9.61667 16 11C16 12.3833 15.5127 13.5623 14.538 14.537C13.5627 15.5123 12.3833 16 11 16ZM0 12V10H4V12H0ZM18 12V10H22V12H18ZM10 4V0H12V4H10ZM10 22V18H12V22H10ZM5.35 6.75L2.875 4.275L4.275 2.875L6.75 5.35L5.35 6.75ZM17.725 19.125L15.25 16.65L16.65 15.25L19.125 17.725L17.725 19.125ZM16.65 6.75L15.25 5.35L17.725 2.875L19.125 4.275L16.65 6.75ZM4.275 19.125L2.875 17.725L5.35 15.25L6.75 16.65L4.275 19.125Z"/>
    </svg>
  )
}

export const TabbedViewIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * 4/5
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19H19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868ZM19 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V11H20V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM4 16V13H8L7.99999 12.9995H11V13H20V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H10V16.9995H8.00033L8 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16Z"/>
    </svg>
  )
}

export const TemperatureIcon  = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20C3.61667 20 2.43767 19.5127 1.463 18.538C0.487667 17.5627 0 16.3833 0 15C0 14.2 0.175 13.454 0.525 12.762C0.875 12.0707 1.36667 11.4833 2 11V3C2 2.16667 2.29167 1.45833 2.875 0.875C3.45833 0.291667 4.16667 0 5 0C5.83333 0 6.54167 0.291667 7.125 0.875C7.70833 1.45833 8 2.16667 8 3V11C8.63333 11.4833 9.125 12.0707 9.475 12.762C9.825 13.454 10 14.2 10 15C10 16.3833 9.51267 17.5627 8.538 18.538C7.56267 19.5127 6.38333 20 5 20ZM4 9H6V8H5V7H6V5H5V4H6V3C6 2.71667 5.90433 2.479 5.713 2.287C5.521 2.09567 5.28333 2 5 2C4.71667 2 4.47933 2.09567 4.288 2.287C4.096 2.479 4 2.71667 4 3V9Z"/>
    </svg>
  )
}

export const TickIcon = () => {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.55001 13L0.850006 7.29998L2.27501 5.87498L6.55001 10.15L15.725 0.974976L17.15 2.39998L6.55001 13Z"/>
    </svg>
  )
}
