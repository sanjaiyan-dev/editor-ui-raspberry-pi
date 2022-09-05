import React from 'react';
import { useCookies } from 'react-cookie';

const fontScaleFactors = {'small': 1, 'medium': 1.44, 'large': 2.074}

export const AccountIcon = () => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a">
        <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9ZM4.563 14.652C4.95 13.842 7.308 13.05 9 13.05c1.692 0 4.059.792 4.437 1.602C12.213 15.624 10.674 16.2 9 16.2c-1.674 0-3.213-.576-4.437-1.548Zm10.161-1.305C13.437 11.781 10.314 11.25 9 11.25s-4.437.531-5.724 2.097C2.358 12.141 1.8 10.638 1.8 9c0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 1.638-.558 3.141-1.476 4.347ZM9 3.6a3.142 3.142 0 0 0-3.15 3.15A3.142 3.142 0 0 0 9 9.9a3.142 3.142 0 0 0 3.15-3.15A3.142 3.142 0 0 0 9 3.6Zm0 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35Z"/>
      </mask>
      <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9ZM4.563 14.652C4.95 13.842 7.308 13.05 9 13.05c1.692 0 4.059.792 4.437 1.602C12.213 15.624 10.674 16.2 9 16.2c-1.674 0-3.213-.576-4.437-1.548Zm10.161-1.305C13.437 11.781 10.314 11.25 9 11.25s-4.437.531-5.724 2.097C2.358 12.141 1.8 10.638 1.8 9c0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 1.638-.558 3.141-1.476 4.347ZM9 3.6a3.142 3.142 0 0 0-3.15 3.15A3.142 3.142 0 0 0 9 9.9a3.142 3.142 0 0 0 3.15-3.15A3.142 3.142 0 0 0 9 3.6Zm0 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35Z"/>
      <path d="M4.563 14.652.9538 12.9276-.42 15.8028l2.4954 1.9816L4.563 14.652Zm8.874 0 2.4875 3.1324 2.4722-1.9632-1.335-2.8607-3.6247 1.6915ZM3.276 13.347.0932 15.7697l3.0626 4.0235 3.2105-3.9065L3.276 13.347ZM9-4C1.8229-4-4 1.8229-4 9h8c0-2.7589 2.2411-5 5-5v-8ZM-4 9c0 7.1771 5.8229 13 13 13v-8c-2.7589 0-5-2.2411-5-5h-8ZM9 22c7.1771 0 13-5.8229 13-13h-8c0 2.7589-2.2411 5-5 5v8ZM22 9C22 1.8229 16.1771-4 9-4v8c2.7589 0 5 2.2411 5 5h8ZM8.1722 16.3764c-.2268.4747-.501.7599-.6277.8798-.1382.1307-.2364.1917-.2473.1985-.0161.0101.0833-.0499.3241-.1348.2243-.079.4907-.1511.7608-.2016.2758-.0515.49-.0683.6179-.0683v-8c-1.3782 0-2.8427.3037-4.037.7245-.6086.2145-1.277.5044-1.897.8907-.4995.3113-1.5158 1.0141-2.1122 2.2624l7.2184 3.4488ZM9 17.05c.128 0 .3432.0169.6202.0685.2713.0507.5387.1229.7634.202.2417.085.3396.1446.3209.1329-.0123-.0076-.1135-.0707-.255-.2053-.1296-.1234-.4096-.4169-.6372-.9046l7.2494-3.383c-.5933-1.2715-1.6243-1.9835-2.1218-2.2939-.6217-.388-1.2922-.6784-1.901-.8926C11.8435 9.3534 10.3773 9.05 9 9.05v8Zm1.9495-5.5304c-.543.4312-1.212.6804-1.9495.6804v8c2.6105 0 5.0195-.9028 6.9245-2.4156l-4.975-6.2648ZM9 12.2c-.7375 0-1.4065-.2492-1.9495-.6804l-4.975 6.2648C3.9805 19.2972 6.3895 20.2 9 20.2v-8Zm8.8143-1.3927c-1.4113-1.7173-3.4552-2.53-4.8032-2.9305C11.5551 7.4443 10.0625 7.25 9 7.25v8c.2515 0 .9774.0712 1.7331.2957.3584.1064.6347.2217.8208.3234.1981.1082.1782.1374.0798.0176l6.1806-5.0794ZM9 7.25c-1.0625 0-2.555.1943-4.0111.6269C3.6409 8.2773 1.597 9.09.1857 10.8072l6.1806 5.0794c-.0984.1198-.1183.0906.0797-.0176.1862-.1017.4625-.217.8209-.3234C8.0226 15.3212 8.7485 15.25 9 15.25v-8Zm-2.5412 3.6743C6.0388 10.3724 5.8 9.7111 5.8 9h-8c0 2.5649.8772 4.9096 2.2932 6.7697l6.3656-4.8454ZM5.8 9c0-1.7599 1.4401-3.2 3.2-3.2v-8C2.8219-2.2-2.2 2.8219-2.2 9h8ZM9 5.8c1.7599 0 3.2 1.4401 3.2 3.2h8C20.2 2.8219 15.1781-2.2 9-2.2v8ZM12.2 9c0 .7111-.2388 1.3724-.6588 1.9243l6.3656 4.8454C19.3228 13.9096 20.2 11.5649 20.2 9h-8ZM9-.4c-3.9551 0-7.15 3.1949-7.15 7.15h8c0 .4631-.3869.85-.85.85v-8ZM1.85 6.75c0 3.9551 3.1949 7.15 7.15 7.15v-8c.4631 0 .85.3869.85.85h-8ZM9 13.9c3.9551 0 7.15-3.1949 7.15-7.15h-8c0-.4631.3869-.85.85-.85v8Zm7.15-7.15C16.15 2.7949 12.9551-.4 9-.4v8c-.4631 0-.85-.3869-.85-.85h8ZM9 4.1c1.4621 0 2.65 1.1879 2.65 2.65h-8c0 2.9561 2.3939 5.35 5.35 5.35v-8Zm2.65 2.65c0 1.4621-1.1879 2.65-2.65 2.65v-8c-2.9561 0-5.35 2.3939-5.35 5.35h8ZM9 9.4c-1.4621 0-2.65-1.1879-2.65-2.65h8c0-2.9561-2.3939-5.35-5.35-5.35v8ZM6.35 6.75C6.35 5.2879 7.5379 4.1 9 4.1v8c2.9561 0 5.35-2.3939 5.35-5.35h-8Z" mask="url(#a)"/>
    </svg>
  )
}

export const ChevronDown = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z"/>
    </svg>
  )
}

export const CogIcon = () => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2396 11.5208C18.2812 11.1874 18.3125 10.8541 18.3125 10.4999C18.3125 10.1458 18.2812 9.81242 18.2396 9.47909L20.4375 7.76034C20.6354 7.60409 20.6875 7.32284 20.5625 7.09367L18.4792 3.4895C18.3854 3.32284 18.2083 3.22909 18.0208 3.22909C17.9583 3.22909 17.8958 3.2395 17.8438 3.26034L15.25 4.302C14.7083 3.88534 14.125 3.54159 13.4896 3.28117L13.0938 0.520752C13.0625 0.270752 12.8438 0.083252 12.5833 0.083252H8.41667C8.15625 0.083252 7.9375 0.270752 7.90625 0.520752L7.51042 3.28117C6.875 3.54159 6.29167 3.89575 5.75 4.302L3.15625 3.26034C3.09375 3.2395 3.03125 3.22909 2.96875 3.22909C2.79167 3.22909 2.61458 3.32284 2.52083 3.4895L0.437501 7.09367C0.302084 7.32284 0.364584 7.60409 0.562501 7.76034L2.76042 9.47909C2.71875 9.81242 2.6875 10.1562 2.6875 10.4999C2.6875 10.8437 2.71875 11.1874 2.76042 11.5208L0.562501 13.2395C0.364584 13.3958 0.312501 13.677 0.437501 13.9062L2.52083 17.5103C2.61458 17.677 2.79167 17.7708 2.97917 17.7708C3.04167 17.7708 3.10417 17.7603 3.15625 17.7395L5.75 16.6978C6.29167 17.1145 6.875 17.4583 7.51042 17.7187L7.90625 20.4791C7.9375 20.7291 8.15625 20.9166 8.41667 20.9166H12.5833C12.8438 20.9166 13.0625 20.7291 13.0938 20.4791L13.4896 17.7187C14.125 17.4583 14.7083 17.1041 15.25 16.6978L17.8438 17.7395C17.9062 17.7603 17.9688 17.7708 18.0312 17.7708C18.2083 17.7708 18.3854 17.677 18.4792 17.5103L20.5625 13.9062C20.6875 13.677 20.6354 13.3958 20.4375 13.2395L18.2396 11.5208ZM16.1771 9.7395C16.2188 10.0624 16.2292 10.2812 16.2292 10.4999C16.2292 10.7187 16.2083 10.9478 16.1771 11.2603L16.0312 12.4374L16.9583 13.1666L18.0833 14.0416L17.3542 15.302L16.0312 14.7708L14.9479 14.3333L14.0104 15.0416C13.5625 15.3749 13.1354 15.6249 12.7083 15.802L11.6042 16.2499L11.4375 17.427L11.2292 18.8333H9.77083L9.57292 17.427L9.40625 16.2499L8.30208 15.802C7.85417 15.6145 7.4375 15.3749 7.02083 15.0624L6.07292 14.3333L4.96875 14.7812L3.64583 15.3124L2.91667 14.052L4.04167 13.177L4.96875 12.4478L4.82292 11.2708C4.79167 10.9478 4.77083 10.7083 4.77083 10.4999C4.77083 10.2916 4.79167 10.052 4.82292 9.7395L4.96875 8.56242L4.04167 7.83325L2.91667 6.95825L3.64583 5.69784L4.96875 6.22909L6.05208 6.66659L6.98958 5.95825C7.4375 5.62492 7.86458 5.37492 8.29167 5.19784L9.39583 4.74992L9.5625 3.57284L9.77083 2.16659H11.2188L11.4167 3.57284L11.5833 4.74992L12.6875 5.19784C13.1354 5.38534 13.5521 5.62492 13.9688 5.93742L14.9167 6.66659L16.0208 6.21867L17.3438 5.68742L18.0729 6.94784L16.9583 7.83325L16.0312 8.56242L16.1771 9.7395ZM10.5 6.33325C8.19792 6.33325 6.33333 8.19784 6.33333 10.4999C6.33333 12.802 8.19792 14.6666 10.5 14.6666C12.8021 14.6666 14.6667 12.802 14.6667 10.4999C14.6667 8.19784 12.8021 6.33325 10.5 6.33325ZM10.5 12.5833C9.35417 12.5833 8.41667 11.6458 8.41667 10.4999C8.41667 9.35409 9.35417 8.41659 10.5 8.41659C11.6458 8.41659 12.5833 9.35409 12.5833 10.4999C12.5833 11.6458 11.6458 12.5833 10.5 12.5833Z" fill="black"/>
    </svg>
  )
}

export const DoubleChevronIcon = () => {
  return (
    <svg width="10" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.227.086.334.979l2.9006 2.907L.334 6.793l.893.893 3.8-3.8-3.8-3.8Z"/>
      <path d="m5.4374.086-.893.893 2.9007 2.907-2.9007 2.907.893.893 3.8-3.8-3.8-3.8Z"/>
    </svg>
  )
}

export const EllipsisVerticalIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.378387 12.0001C0.378387 12.9167 1.10812 13.6667 2.00001 13.6667C2.8919 13.6667 3.62163 12.9167 3.62163 12.0001C3.62163 11.0834 2.8919 10.3334 2.00001 10.3334C1.10812 10.3334 0.378387 11.0834 0.378387 12.0001ZM0.378387 2.00008C0.378387 2.91675 1.10812 3.66675 2.00001 3.66675C2.8919 3.66675 3.62163 2.91675 3.62163 2.00008C3.62163 1.08341 2.8919 0.333415 2.00001 0.333415C1.10812 0.333415 0.378387 1.08342 0.378387 2.00008ZM0.378387 7.00008C0.378387 7.91675 1.10812 8.66675 2.00001 8.66675C2.8919 8.66675 3.62163 7.91675 3.62163 7.00008C3.62163 6.08341 2.8919 5.33341 2.00001 5.33341C1.10812 5.33341 0.378387 6.08342 0.378387 7.00008Z" fill="black"/>
    </svg>
  )
}

export const FileIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="15" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.132 5.631 9.247.294A.897.897 0 0 0 8.583 0H2.298A2.29 2.29 0 0 0 .684.64 2.25 2.25 0 0 0 0 2.224v13.343a2.233 2.233 0 0 0 .684 1.584 2.273 2.273 0 0 0 1.614.64h9.769a2.29 2.29 0 0 0 1.614-.64 2.25 2.25 0 0 0 .684-1.584v-9.34a.884.884 0 0 0-.233-.596ZM8.978 2.669l2.46 2.668H9.642a.715.715 0 0 1-.63-.48.697.697 0 0 1-.034-.276V2.67Zm3.089 13.343H2.298a.48.48 0 0 1-.456-.266.468.468 0 0 1-.046-.179V2.224a.468.468 0 0 1 .318-.42.48.48 0 0 1 .184-.025h4.884v2.802a2.47 2.47 0 0 0 .69 1.765 2.515 2.515 0 0 0 1.744.77h2.953v8.451a.468.468 0 0 1-.318.42.48.48 0 0 1-.184.025Z"/>
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

export const HumidityIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * 1.6
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M7.5 2.5C4.909 4.775 3.611 6.74 3.611 8.4c0 2.49 1.847 4.1 3.889 4.1s3.889-1.61 3.889-4.1c0-1.66-1.298-3.625-3.889-5.9zm0 9c-1.628 0-2.917-1.285-2.917-3.1 0-1.17.948-2.72 2.917-4.57 1.969 1.85 2.917 3.395 2.917 4.57 0 1.815-1.289 3.1-2.917 3.1z"/>
        <path d="M7.978 6.032a.339.339 0 1 1 .625.262l-1.605 3.831a.338.338 0 0 1-.624-.261z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.357 8.051c.473 0 .857-.511.857-1.142 0-.632-.384-1.143-.857-1.143S5.5 6.277 5.5 6.909c0 .63.384 1.142.857 1.142zm-.001-.572c.158 0 .286-.256.286-.572 0-.315-.128-.571-.286-.571-.158 0-.286.256-.286.571 0 .316.128.572.286.572zM8.644 10.34c.473 0 .857-.511.857-1.142 0-.632-.384-1.143-.857-1.143s-.857.511-.857 1.143c0 .63.384 1.143.857 1.143zm-.001-.572c.158 0 .286-.256.286-.572 0-.315-.128-.571-.286-.571-.158 0-.286.256-.286.571 0 .316.128.572.286.572z"/>
      </g>
    </svg>
  )
}

export const LoginIcon = () => {
  return (
    <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1111 17h-8.5a1.889 1.889 0 0 1-1.8889-1.8889v-3.7778h1.889v3.7778h8.4999V1.8889h-8.5v3.7778H4.7222V1.8889A1.8889 1.8889 0 0 1 6.6112 0h8.4999A1.889 1.889 0 0 1 17 1.8889V15.111c0 .501-.199.9814-.5532 1.3357A1.8892 1.8892 0 0 1 15.1111 17ZM8.5 12.2778V9.4444H0V7.5556h8.5V4.7222L13.2222 8.5 8.5 12.2778Z"/>
    </svg>
  )
}

export const MoonIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="22" height="22" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27778 1.83341C5.60278 1.83341 2.61111 4.82508 2.61111 8.50008C2.61111 12.1751 5.60278 15.1667 9.27778 15.1667C9.56111 15.1667 9.84444 15.1501 10.1194 15.1084C8.52778 13.3084 7.61111 10.9584 7.61111 8.50008C7.61111 6.04175 8.52778 3.69175 10.1194 1.89175C9.84444 1.85008 9.56111 1.83341 9.27778 1.83341ZM9.27778 0.166748C10.7944 0.166748 12.2194 0.583415 13.4444 1.29175C10.9528 2.73341 9.27778 5.41675 9.27778 8.50008C9.27778 11.5834 10.9528 14.2667 13.4444 15.7084C12.2194 16.4167 10.7944 16.8334 9.27778 16.8334C4.67778 16.8334 0.944443 13.1001 0.944443 8.50008C0.944443 3.90008 4.67778 0.166748 9.27778 0.166748Z" />
    </svg>
  )
}

export const NewFileIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 8.1748H8.5V14.1748H6.5V8.1748H0.5V6.1748H6.5V0.174805H8.5V6.1748H14.5V8.1748Z" fill="black"/>
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

export const RemixIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Remix</title>
      <path d="m14.3027 4.2986.3325-1.0901.2149-.7085.7739.1828.7561.1672-.2305.8216-.9262 3.0281-.2233.8003s-.564-.2134-.7647-.2746l-3.0281-.9262-.7072-.2492.52-1.47.6503.2055 1.3237.4045a5.8438 5.8438 0 0 0-5.4443-2.5994 5.8434 5.8434 0 0 0-4.841 3.6001l-.206.5011a.7917.7917 0 1 1-1.4645-.6l.2058-.5012a7.4266 7.4266 0 0 1 13.0586-1.292Zm-12.2883 8.402-.2589 1.0379c-.0231.1029-.1855.7915-.1855.7915s-.676-.1717-.7784-.1972c-.1024-.0256-.772-.1828-.772-.1828s.1722-.693.2001-.7947l.7656-3.0717C1.011 10.179 1.19 9.5 1.19 9.5s.6937.1851.7966.2168l3.0305.7552c.2038.0509.783.178.783.178s-.1554.5782-.2062.7819c-.0509.2038-.1939.7481-.1939.7481s-.5623-.1205-.766-.1713l-1.414-.3523a5.846 5.846 0 0 0 10.4627-1.4187.7916.7916 0 0 1 .9951-.5138.7912.7912 0 0 1 .463.3912.7918.7918 0 0 1 .0508.6039 7.4282 7.4282 0 0 1-1.6175 2.7806 7.4287 7.4287 0 0 1-2.6416 1.8357 7.431 7.431 0 0 1-8.9182-2.6347Z"/>
    </svg>
  )
}

export const ResetIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.65 2.35C12.2 0.9 10.21 0 8 0C3.58 0 0.0100021 3.58 0.0100021 8C0.0100021 12.42 3.58 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V0L13.65 2.35Z" />
    </svg>
  )
}

export const RunIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25331 11.0714C1.12931 11.0714 1.01039 11.0262 0.922706 10.9458C0.835025 10.8655 0.785767 10.7564 0.785767 10.6428V1.21415C0.785781 1.13967 0.806965 1.06649 0.847232 1.0018C0.8875 0.937121 0.94546 0.883173 1.0154 0.845278C1.08534 0.807382 1.16485 0.786847 1.24608 0.785696C1.32732 0.784545 1.40748 0.802818 1.47866 0.838715L10.8294 5.55303C10.9027 5.59003 10.9639 5.64438 11.0064 5.71042C11.049 5.77646 11.0715 5.85176 11.0715 5.92847C11.0715 6.00517 11.049 6.08047 11.0064 6.14651C10.9639 6.21255 10.9027 6.2669 10.8294 6.3039L1.47866 11.0182C1.40963 11.0531 1.33211 11.0713 1.25331 11.0714Z" fill="#1A1A1A"/>
    </svg>
  )
}

export const SaveIcon = () => {
  return (
    <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="b">
        <path d="M15.1111 8.5v6.6111H1.8889V8.5H0v6.6111C0 16.15.85 17 1.8889 17H15.111C16.15 17 17 16.15 17 15.1111V8.5h-1.8889Zm-5.6667.6328 2.4462-2.4367 1.3316 1.3317L8.5 12.75 3.7778 8.0278 5.1094 6.696l2.4462 2.4367V0h1.8888v9.1328Z"/>
      </mask>
      <path d="M15.1111 8.5v6.6111H1.8889V8.5H0v6.6111C0 16.15.85 17 1.8889 17H15.111C16.15 17 17 16.15 17 15.1111V8.5h-1.8889Zm-5.6667.6328 2.4462-2.4367 1.3316 1.3317L8.5 12.75 3.7778 8.0278 5.1094 6.696l2.4462 2.4367V0h1.8888v9.1328Z"/>
      <path d="M15.1111 8.5v-4h-4v4h4Zm0 6.6111v4h4v-4h-4Zm-13.2222 0h-4v4h4v-4Zm0-6.6111h4v-4h-4v4ZM0 8.5v-4h-4v4h4Zm17 0h4v-4h-4v4Zm-7.5556.6328h-4v9.6305l6.823-6.7966-2.823-2.834Zm2.4462-2.4367 2.8284-2.8284-2.823-2.823-2.8284 2.8175 2.823 2.834Zm1.3316 1.3317 2.8284 2.8284 2.8285-2.8284-2.8285-2.8284-2.8284 2.8284ZM8.5 12.75l-2.8284 2.8284L8.5 18.4069l2.8284-2.8285L8.5 12.75ZM3.7778 8.0278.9494 5.1994l-2.8285 2.8284 2.8285 2.8284 2.8284-2.8284ZM5.1094 6.696l2.823-2.8339L5.104 1.0447l-2.823 2.823L5.1094 6.696Zm2.4462 2.4367-2.823 2.8339 6.823 6.7966V9.1328h-4Zm0-9.1328v-4h-4v4h4Zm1.8888 0h4v-4h-4v4Zm1.6667 8.5v6.6111h8V8.5h-8Zm4 2.6111H1.8889v8H15.111v-8Zm-9.2222 4V8.5h-8v6.6111h8Zm-4-10.6111H0v8h1.8889v-8ZM-4 8.5v6.6111h8V8.5h-8Zm0 6.6111C-4 18.3591-1.3591 21 1.8889 21v-8A2.1056 2.1056 0 0 1 4 15.1111h-8ZM1.8889 21H15.111v-8H1.8889v8Zm13.2222 0C18.3591 21 21 18.3591 21 15.1111h-8A2.1057 2.1057 0 0 1 15.1111 13v8ZM21 15.1111V8.5h-8v6.6111h8ZM17 4.5h-1.8889v8H17v-8Zm-4.7326 7.4667L14.7135 9.53 9.0676 3.8622 6.6215 6.299l5.6459 5.6678ZM9.0621 9.5245l1.3317 1.3317 5.6568-5.6568-1.3316-1.3317-5.6569 5.6568Zm1.3317-4.3251L5.6716 9.9215l5.6568 5.6568 4.7222-4.7222-5.6568-5.6568Zm.9346 4.7222L6.6062 5.1994.9494 10.8561l4.7222 4.7222 5.6568-5.6568Zm-4.7222.9346 1.3317-1.3317L2.281 3.8677.9494 5.1993l5.6568 5.6569ZM2.2865 9.53l2.4461 2.4367 5.6459-5.6678-2.4461-2.4367L2.2864 9.53Zm9.2691-.3972V0h-8v9.1328h8ZM7.5556 4h1.8888v-8H7.5556v8ZM5.4444 0v9.1328h8V0h-8Z" mask="url(#b)"/>
    </svg>
  )
}

export const SettingsIcon = () => {
  const [cookies] = useCookies(['fontSize', 'theme'])
  const isDarkMode = cookies.theme==="dark" || (!cookies.theme && window.matchMedia("(prefers-color-scheme:dark)").matches)
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
  <svg transform={`scale(${scale}, ${scale})`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3H5M5 3C5 4.10457 5.89543 5 7 5C8.10457 5 9 4.10457 9 3M5 3C5 1.89543 5.89543 1 7 1C8.10457 1 9 1.89543 9 3M19 3H9M1 10H13M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10M13 10C13 8.89543 13.8954 8 15 8C16.1046 8 17 8.89543 17 10M19 10H17M1 17H3M3 17C3 18.1046 3.89543 19 5 19C6.10457 19 7 18.1046 7 17M3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17M19 17H7" fill="none" stroke={isDarkMode? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
  </svg>

  )
}

export const ShareIcon = () => {
  return (
    <svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m10.9003 4.4708.6497-.0877V1.6923l5.3342 4.836-5.3342 4.8489V8.49h-.75c-2.5746 0-4.7592.3825-6.6422 1.2172a11.4396 11.4396 0 0 0-2.5066 1.5182c.5055-1.1804 1.1759-2.2882 2.0556-3.2546 1.5714-1.726 3.854-3.0493 7.1935-3.5Z" strokeWidth="1.5"/>
    </svg>
  )
}

export const SquaresIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.100098 0H4.6001V4.5H0.100098V0ZM0.100098 6.75H4.6001V11.25H0.100098V6.75ZM4.6001 13.5H0.100098V18H4.6001V13.5ZM6.8501 0H11.3501V4.5H6.8501V0ZM11.3501 6.75H6.8501V11.25H11.3501V6.75ZM6.8501 13.5H11.3501V18H6.8501V13.5ZM18.1001 0H13.6001V4.5H18.1001V0ZM13.6001 6.75H18.1001V11.25H13.6001V6.75ZM18.1001 13.5H13.6001V18H18.1001V13.5Z"/>
    </svg>
  )
}

export const StopIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.71429 0.5H10.2857C10.7404 0.5 11.1764 0.680612 11.4979 1.0021C11.8194 1.32359 12 1.75963 12 2.21429V10.7857C12 11.2404 11.8194 11.6764 11.4979 11.9979C11.1764 12.3194 10.7404 12.5 10.2857 12.5H1.71429C1.25963 12.5 0.823593 12.3194 0.502103 11.9979C0.180612 11.6764 0 11.2404 0 10.7857V2.21429C0 1.75963 0.180612 1.32359 0.502103 1.0021C0.823593 0.680612 1.25963 0.5 1.71429 0.5Z" fill="white"/>
    </svg>
  )
}

export const SunIcon = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = fontScaleFactors[cookies.fontSize] || 1
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.03409 3.79795L3.5 2.26541L2.2983 3.4726L3.82386 5.00514L5.03409 3.79795ZM0.125 8.64384H2.68182V10.3562H0.125V8.64384ZM8.64773 0.125H10.3523V2.65068H8.64773V0.125ZM15.5 2.26113L16.7 3.46575L15.1744 4.99829L13.9753 3.79281L15.5 2.26113ZM13.9659 15.2021L15.4915 16.7431L16.6932 15.536L15.1591 14.0034L13.9659 15.2021ZM16.3182 8.64384H18.875V10.3562H16.3182V8.64384ZM9.5 4.36301C6.67898 4.36301 4.38636 6.6661 4.38636 9.5C4.38636 12.3339 6.67898 14.637 9.5 14.637C12.321 14.637 14.6136 12.3339 14.6136 9.5C14.6136 6.6661 12.321 4.36301 9.5 4.36301ZM9.5 12.9247C7.61648 12.9247 6.09091 11.3921 6.09091 9.5C6.09091 7.60788 7.61648 6.07534 9.5 6.07534C11.3835 6.07534 12.9091 7.60788 12.9091 9.5C12.9091 11.3921 11.3835 12.9247 9.5 12.9247ZM8.64773 16.3493H10.3523V18.875H8.64773V16.3493ZM2.2983 15.5274L3.5 16.7346L5.02557 15.1935L3.82386 13.9863L2.2983 15.5274Z" />
    </svg>
  )
}

export const TemperatureIcon  = () => {
  const [cookies] = useCookies(['fontSize'])
  const scale = (fontScaleFactors[cookies.fontSize] || 1) * 1.6
  return (
    <svg transform={`scale(${scale}, ${scale})`} width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.954 5.657a.457.457 0 0 0-.455-.456.454.454 0 0 0-.454.456v2.978a1.214 1.214 0 0 0-.734 1.36 1.217 1.217 0 0 0 1.19.984 1.21 1.21 0 0 0 1.19-.984 1.22 1.22 0 0 0-.736-1.36ZM5.379 4.593v-.001c.01-.558.237-1.09.633-1.482a2.116 2.116 0 0 1 2.973 0c.397.392.624.924.633 1.482v3.447a2.741 2.741 0 0 1-.662 4.039 2.72 2.72 0 0 1-3.918-1.137 2.746 2.746 0 0 1 .344-2.902c0-1.056-.005-2.42-.005-3.446zm.91-.001c-.004 1.265.002 2.531.002 3.797l-.122.131a1.827 1.827 0 0 0 1.332 3.068 1.813 1.813 0 0 0 1.667-1.096 1.83 1.83 0 0 0-.336-1.972L8.71 8.39V4.592c0-.323-.128-.632-.355-.86a1.209 1.209 0 0 0-2.067.86Z"/>
    </svg>
  )
}

export const ThemeIcon = () => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2871 6.33334V2.62042h-3.7129L8.95375 0 6.33334 2.62042H2.62042v3.71292L0 8.95375l2.62042 2.62045v3.7129h3.71292l2.62041 2.6204 2.62045-2.6204h3.7129v-3.7129l2.6204-2.62045-2.6204-2.62041Zm-1.5833 4.58376v2.7867h-2.7867l-1.96335 1.9633-1.96333-1.9633H4.20375v-2.7867L2.24042 8.95375l1.96333-1.96333V4.20375h2.78667l1.96333-1.96333 1.96335 1.96333h2.7867v2.78667l1.9633 1.96333-1.9633 1.96335ZM9.18334 4.99542c-.58584 0-1.14792.13458-1.64667.36417C8.89834 5.985 9.84834 7.3625 9.84834 8.95375s-.95 2.96875-2.31167 3.59415c.49875.2296 1.06083.3642 1.64667.3642 2.18496 0 3.95836-1.7733 3.95836-3.95835 0-2.185-1.7734-3.95833-3.95836-3.95833Z"/>
    </svg>
  )
}
