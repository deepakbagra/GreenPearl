import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const PrivacyPolicy = () => {  
  const classes = useStyles();

  return (
    < div className={classes.container}>
      <Typography variant='h4' style={{marginTop: '5em'}}className={classes.title}>Privacy Policy of monajamshaid.info</Typography>
      <Typography className={classes.content}>This website and its associated entities (we, our, us) are committed to protecting the privacy and confidentiality of all personal information that is collected, stored, and used by us in our application. We respect the rights of individuals in relation to the personal information we hold about them. This is undertaken in compliance with the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), the National Disability Insurance Scheme (Code of Conduct) Rules 2018 and other related laws that protect privacy. In the event of any inconsistency, any legislative and regulatory requirements will override the provisions of this policy.</Typography>
      <Typography className={classes.subTitle}>Owner and Data Controller</Typography>
      <Typography className={classes.content}>Mona Jamshaid<br></br>
      greepearls consultancy, South Australia<br></br>           
   
      </Typography>

      <Typography className={classes.subTitle}>Types of Data Collected</Typography>
      <Typography className={classes.content}>
      Among the types of Personal Data that this Website collects, by itself or through third parties, there are:
      <br></br>•	Email address;
      <br></br>•	Profile picture;
      <br></br>•	Usage Data;
              <br></br>•	First name. <br></br>
              Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Website.
Unless specified otherwise, all Data requested by this Website is mandatory and failure to provide this Data may make it impossible for this Website to provide its services. In cases where this Website specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.

Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
Any use of Cookies – or of other tracking tools – by this Website or by the owners of third-party services used by this Website serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
Users are responsible for any third-party Personal Data obtained, published or shared through this Website and confirm that they have the third party's consent to provide the Data to the Owner.
</Typography>
<Typography className={classes.subTitle}>Mode and Place of Processing the Data</Typography>
    <Typography className={classes.content}>
    The Owner takes appropriate security measures to prevent unauthorised access, disclosure, modification, or unauthorised destruction of the Data.The Data processing is carried out using computers and/or IT enabled tools, following organisational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner.
          </Typography>
          
          <Typography className={classes.subTitle}>Legal Basis of Processing</Typography>
    <Typography className={classes.content}>
    The Owner may process Personal Data relating to Users if one of the following applies: <br></br>
    <br></br>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to Australian data protection law;
    <br></br>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;
    <br></br>processing is necessary for compliance with a legal obligation to which the Owner is subject;
    <br></br>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;
    <br></br>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.
In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.

          </Typography>
          <Typography className={classes.subTitle}>Place</Typography>
    <Typography className={classes.content}>
    The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
Users are also entitled to learn about the legal basis of Data transfers to a country outside Australia or to any international organisation governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.

If any such transfer takes place, Users can find out more by checking the relevant sections of this document or enquire with the Owner using the information provided in the contact section.

          </Typography>

          <Typography className={classes.subTitle}>Retention Time</Typography>
    <Typography className={classes.content}>
              Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
              <br></br>
              Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.
              <br></br>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.
The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.

Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period

          </Typography>
              


     
    </div>
  )
}

export default PrivacyPolicy;