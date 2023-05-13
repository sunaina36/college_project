// const userData=require('../modals/userdata');
const otp = require("./otp");
const Email = require("./Email");
const users = require("./users");
const userData = require("../modals/userdata");
const flash = require("connect-flash");

let usersD = async function (req, res) {
  users.user.firstName = req.body.firstName;
  users.user.DOB = req.body.dateOfBirth;
  users.user.phoneNumber = req.body.phoneNumber;
  users.user.email = req.body.email;
  users.user.aadharNumber = req.body.aadharNumber;
  users.user.panNumber = req.body.panNumber;
  users.user.password = req.body.password;
  if (users.user.password !== req.body.confirmPassword) {
    req.flash("message", "Password And Confirm Password don't match");
    console.log("error");
    res.redirect("/signup");
  } else {
    // console.log( userData.findOne({aadharNumber:users.user.aadharNumber}));
    await userData
      .findOne({
        $and: [
          {
            aadharNumber: users.user.aadharNumber,
            panNumber: users.user.panNumber,
            phoneNumber: users.user.phoneNumber,
            email: users.user.email,
            password: users.user.password,
          },
        ],
      })
      .then(async (user) => {
        if (user) {
          req.flash("message", "User Already Exist Please Log In");
          // console.log('userExist');
          res.redirect("/signup");
        } else {
          await userData
            .findOne({ aadharNumber: users.user.aadharNumber })
            .then(async (user) => {
              if (user) {
                req.flash("message", "Aadhar already linked");
                console.log("aadhar already exist");
                res.redirect("/signup");
              } else {
                await userData
                  .findOne({ panNumber: users.user.panNumber })
                  .then(async (user) => {
                    if (user) {
                      req.flash("message", "PAN already linked");
                      console.log("pan already exist");
                      res.redirect("/signup");
                    } else {
                      await userData
                        .findOne({ phoneNumber: users.user.phoneNumber })
                        .then(async (user) => {
                          if (user) {
                            req.flash("message", "Phone number already linked");
                            console.log("phone number already exist");
                            res.redirect("/signup");
                          } else {
                           await userData
                              .findOne({ email: users.user.email })
                              .then(async (user) => {
                                if (user) {
                                  req.flash("message", "email already linked");
                                  console.log("email already exist");
                                  res.redirect("/signup");
                                } else {
                                  var OTP = otp.generateOTP();
                                  await otp.getGeneratedotp(OTP);
                                  Email(
                                    users.user.firstName,
                                    users.user.email,
                                    OTP
                                  );
                                  res.redirect("/otp");
                                }
                              });
                          }
                        });
                    }
                  });
              }
            });
        }
      });
  }
};

module.exports = usersD;

// try{
//   let userDetails = new userData({
//     firstName:req.body.firstName,
//   DOB:req.body.dateOfBirth,
//   phoneNumber:req.body.phoneNumber,
//   email:req.body.email,
//   aadharNumber:req.body.aadharNumber,
//   panNumber:req.body.panNumber
//   });
//   console.log(userDetails);
//   userDetails.save();
//   res.redirect('/login');
// }catch(error){
//   console.log(error);
// }
