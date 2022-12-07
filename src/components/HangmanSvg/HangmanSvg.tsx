function HangmanSvg() {

    return (
        <svg width="484" height="619" viewBox="0 0 484 619" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="wholeGraphic" stroke=>
            <g id="body">
            <path id="rightLeg" d="M406.5 337L478.5 442.5" stroke="black" stroke-width="5"/>
            <path id="leftLeg" d="M406.5 337L328 445" stroke="black" stroke-width="5"/>
            <path id="rightArm" d="M406.5 220L482 144.5" stroke="black" stroke-width="5"/>
            <path id="leftArm" d="M406 218.5L330 142.5" stroke="black" stroke-width="5"/>
            <path id="torso" d="M406 154V337" stroke="black" stroke-width="5"/>
            <g id="head" filter="url(#filter0_d_3_53)">
            <path id="sadFace" d="M395.25 102.75L391.5 99L399 106.5L395.25 102.75ZM395.25 102.75L391.5 106.5L399 99L395.25 102.75ZM418.25 102.75L414.5 99L422 106.5L418.25 102.75ZM418.25 102.75L414.5 106.5L422 99L418.25 102.75ZM391.5 125C403.81 115.741 410.459 116.417 422 125" stroke="black" stroke-width="2"/>
            <path d="M446.5 115.5C446.5 137.868 428.368 156 406 156C383.632 156 365.5 137.868 365.5 115.5C365.5 93.1325 383.632 75 406 75C428.368 75 446.5 93.1325 446.5 115.5ZM369.863 115.5C369.863 135.458 386.042 151.637 406 151.637C425.958 151.637 442.137 135.458 442.137 115.5C442.137 95.5419 425.958 79.3627 406 79.3627C386.042 79.3627 369.863 95.5419 369.863 115.5Z" fill="black"/>
            </g>
            </g>
            <g id="initialPost">
            <path id="Vector 1" d="M0 616.5H280.373" stroke="black" stroke-width="5"/>
            <path id="Vector 3" d="M140.187 616.01V534.243M61.3611 616.01L100.774 575.127L140.187 534.243M140.187 534.243L219.012 616.01M140.187 534.243V92.1117M430 3H219.012M140.187 92.1117V81.8296V3H219.012M140.187 92.1117L219.012 3" stroke="black" stroke-width="5"/>
            <path id="Vector 4" d="M404.512 3V74.9749" stroke="black" stroke-width="5"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_3_53" x="361.5" y="75" width="89" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_53"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_53" result="shape"/>
            </filter>
            </defs>
        </svg>

    )
}

export default HangmanSvg