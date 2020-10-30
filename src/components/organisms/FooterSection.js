import React from "react"
import FirstFooterSection from "../molecules/FirstFooterSection"
import SecondFooterSection from "../molecules/SecondFooterSection"

const FooterSection = ({
  firstContainerContent,
  secondContainerContent,
}) => (
  <div>
    <FirstFooterSection
      {...firstContainerContent}
    />
    <SecondFooterSection
      {...secondContainerContent}
    />
  </div>
)

FooterSection.propTypes = {
}

FooterSection.defaultProps = {
}

export default FooterSection
