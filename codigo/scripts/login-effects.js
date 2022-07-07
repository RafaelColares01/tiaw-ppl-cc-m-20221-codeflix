const onFocus = (id) => {
  document.getElementById(id).style = "";

  if (id == "user") {
    document.querySelector("#user svg").innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57571 0.0105653C7.54382 0.0186097 7.38863 0.0472299 7.23086 0.0741524C5.92513 0.297132 4.6882 1.29666 4.11643 2.591C3.34209 4.34383 3.72327 6.40651 5.06668 7.73331C6.78772 9.4331 9.48351 9.35039 11.1126 7.54788C12.7414 5.74574 12.6603 2.93064 10.9303 1.21989C10.3427 0.638756 9.66892 0.267986 8.87255 0.0874924C8.62162 0.0306157 7.71049 -0.0234313 7.57571 0.0105653ZM8.72211 2.1946C9.66923 2.52264 10.2963 3.43259 10.2963 4.47913C10.2963 5.56714 9.6249 6.48881 8.59997 6.8078C8.29246 6.90352 7.71613 6.903 7.40178 6.80667C6.28065 6.46318 5.54669 5.3092 5.71742 4.15836C5.8716 3.11898 6.57212 2.34397 7.572 2.10647C7.8838 2.03242 8.3589 2.06884 8.72211 2.1946ZM3.4725 9.81737C1.69093 10.0201 0.387211 11.8564 0.0596393 14.6244C0.0268628 14.9016 0 15.3057 0 15.5224C0 15.8705 0.00869653 15.9212 0.0747521 15.9582C0.125579 15.9866 2.667 16 8.01491 16C15.394 16 15.8844 15.9957 15.9466 15.9306C16.0782 15.7929 15.9511 14.3131 15.7334 13.4496C15.2428 11.5036 14.2829 10.2861 12.9242 9.88662L12.6197 9.79712L8.19413 9.79041C5.76005 9.78673 3.63533 9.79886 3.4725 9.81737ZM12.6748 11.9923C12.8988 12.1172 13.2051 12.4464 13.3702 12.7397C13.5045 12.9781 13.7302 13.5684 13.7783 13.807L13.8048 13.9384H8.00088H2.19699L2.22347 13.807C2.23804 13.7347 2.30611 13.5178 2.37471 13.3249C2.63839 12.5836 3.01482 12.1045 3.46697 11.9347C3.58841 11.8892 4.38533 11.8811 8.05885 11.8883L12.5038 11.897L12.6748 11.9923Z" fill="#EAEAEA"></path>
    `;
  } else {
    document.querySelector("#senha svg").innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87821 0.0976802C3.98022 0.442737 2.33226 1.80382 1.88794 3.39332C1.79397 3.72974 1.75224 4.29407 1.75135 5.2431L1.75 6.60865L1.34167 6.70076C0.7735 6.8289 0.524731 6.98466 0.243115 7.38875L0 7.73752V11.8246C0 15.906 0.00026934 15.9122 0.199859 16.227C0.431667 16.5926 0.751064 16.8047 1.25641 16.9289C1.51703 16.9928 3.13941 17.0108 7.17949 16.9942C12.6226 16.9719 12.7514 16.9679 13.1026 16.8131C13.3259 16.7147 13.5632 16.5167 13.7308 16.2892L14 15.9236V11.8305V7.73752L13.7569 7.38875C13.4753 6.98466 13.2265 6.8289 12.6583 6.70076L12.25 6.60865L12.2487 5.2431C12.2471 3.66586 12.1461 3.18434 11.6458 2.37154C10.5727 0.62764 8.17115 -0.319128 5.87821 0.0976802ZM8.50778 1.74758C9.50744 2.16007 10.2472 2.98082 10.4539 3.9067C10.5039 4.13096 10.5449 4.83773 10.5449 5.4772V6.64006H6.99031H3.43574L3.47433 5.22093C3.50691 4.02507 3.54155 3.7411 3.69447 3.41625C4.09374 2.56803 4.87353 1.91356 5.82642 1.62686C6.54437 1.41092 7.83237 1.4689 8.50778 1.74758ZM12.25 11.8246V15.4954H7H1.75V11.8246V8.1538H7H12.25V11.8246ZM6.50641 9.67745C5.50021 9.92918 4.98633 10.8735 5.41872 11.6763C5.50927 11.8446 5.7103 12.0723 5.86546 12.1824C6.13747 12.3754 6.14744 12.4035 6.14744 12.976C6.14744 13.6396 6.24786 13.8287 6.6806 13.9798C7.01678 14.0973 7.35296 14.0315 7.63592 13.7929C7.82914 13.6298 7.85256 13.5441 7.85256 12.9989C7.85256 12.3973 7.85741 12.384 8.16083 12.1594C8.80573 11.6818 8.92078 10.8461 8.42333 10.2523C8.00091 9.74799 7.19295 9.50572 6.50641 9.67745Z" fill="#EAEAEA"></path>
    `;
  }
};

const onBlur = (id) => {
  document.getElementById(id).style = "border: solid 1px #2b2c33";

  if (id == "user") {
    document.querySelector("#user svg").innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57571 0.0105653C7.54382 0.0186097 7.38863 0.0472299 7.23086 0.0741524C5.92513 0.297132 4.6882 1.29666 4.11643 2.591C3.34209 4.34383 3.72327 6.40651 5.06668 7.73331C6.78772 9.4331 9.48351 9.35039 11.1126 7.54788C12.7414 5.74574 12.6603 2.93064 10.9303 1.21989C10.3427 0.638756 9.66892 0.267986 8.87255 0.0874924C8.62162 0.0306157 7.71049 -0.0234313 7.57571 0.0105653ZM8.72211 2.1946C9.66923 2.52264 10.2963 3.43259 10.2963 4.47913C10.2963 5.56714 9.6249 6.48881 8.59997 6.8078C8.29246 6.90352 7.71613 6.903 7.40178 6.80667C6.28065 6.46318 5.54669 5.3092 5.71742 4.15836C5.8716 3.11898 6.57212 2.34397 7.572 2.10647C7.8838 2.03242 8.3589 2.06884 8.72211 2.1946ZM3.4725 9.81737C1.69093 10.0201 0.387211 11.8564 0.0596393 14.6244C0.0268628 14.9016 0 15.3057 0 15.5224C0 15.8705 0.00869653 15.9212 0.0747521 15.9582C0.125579 15.9866 2.667 16 8.01491 16C15.394 16 15.8844 15.9957 15.9466 15.9306C16.0782 15.7929 15.9511 14.3131 15.7334 13.4496C15.2428 11.5036 14.2829 10.2861 12.9242 9.88662L12.6197 9.79712L8.19413 9.79041C5.76005 9.78673 3.63533 9.79886 3.4725 9.81737ZM12.6748 11.9923C12.8988 12.1172 13.2051 12.4464 13.3702 12.7397C13.5045 12.9781 13.7302 13.5684 13.7783 13.807L13.8048 13.9384H8.00088H2.19699L2.22347 13.807C2.23804 13.7347 2.30611 13.5178 2.37471 13.3249C2.63839 12.5836 3.01482 12.1045 3.46697 11.9347C3.58841 11.8892 4.38533 11.8811 8.05885 11.8883L12.5038 11.897L12.6748 11.9923Z" fill="#7C7A80"></path>
    `;
  } else {
    document.querySelector("#senha svg").innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87821 0.0976802C3.98022 0.442737 2.33226 1.80382 1.88794 3.39332C1.79397 3.72974 1.75224 4.29407 1.75135 5.2431L1.75 6.60865L1.34167 6.70076C0.7735 6.8289 0.524731 6.98466 0.243115 7.38875L0 7.73752V11.8246C0 15.906 0.00026934 15.9122 0.199859 16.227C0.431667 16.5926 0.751064 16.8047 1.25641 16.9289C1.51703 16.9928 3.13941 17.0108 7.17949 16.9942C12.6226 16.9719 12.7514 16.9679 13.1026 16.8131C13.3259 16.7147 13.5632 16.5167 13.7308 16.2892L14 15.9236V11.8305V7.73752L13.7569 7.38875C13.4753 6.98466 13.2265 6.8289 12.6583 6.70076L12.25 6.60865L12.2487 5.2431C12.2471 3.66586 12.1461 3.18434 11.6458 2.37154C10.5727 0.62764 8.17115 -0.319128 5.87821 0.0976802ZM8.50778 1.74758C9.50744 2.16007 10.2472 2.98082 10.4539 3.9067C10.5039 4.13096 10.5449 4.83773 10.5449 5.4772V6.64006H6.99031H3.43574L3.47433 5.22093C3.50691 4.02507 3.54155 3.7411 3.69447 3.41625C4.09374 2.56803 4.87353 1.91356 5.82642 1.62686C6.54437 1.41092 7.83237 1.4689 8.50778 1.74758ZM12.25 11.8246V15.4954H7H1.75V11.8246V8.1538H7H12.25V11.8246ZM6.50641 9.67745C5.50021 9.92918 4.98633 10.8735 5.41872 11.6763C5.50927 11.8446 5.7103 12.0723 5.86546 12.1824C6.13747 12.3754 6.14744 12.4035 6.14744 12.976C6.14744 13.6396 6.24786 13.8287 6.6806 13.9798C7.01678 14.0973 7.35296 14.0315 7.63592 13.7929C7.82914 13.6298 7.85256 13.5441 7.85256 12.9989C7.85256 12.3973 7.85741 12.384 8.16083 12.1594C8.80573 11.6818 8.92078 10.8461 8.42333 10.2523C8.00091 9.74799 7.19295 9.50572 6.50641 9.67745Z" fill="#7C7A80"></path>
    `;
  }
};
