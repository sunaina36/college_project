// const userData=require('../modals/userdata');
const otp = require("./otp");
const Email = require("./Email");
const users = require("./users");
const userData = require("../modals/userdata");
// const flash = require("connect-flash");

let usersD = async function (req, res) {
  users.user.firstName = req.body.firstName;
  users.user.secondName = req.body.secondName;
  users.user.DOB = req.body.dateOfBirth;
  users.user.gender = req.body.gender;
  users.user.phoneNumber = req.body.phoneNumber;
  users.user.email = req.body.email;
  users.user.aadharNumber = req.body.aadharNumber;
  users.user.panNumber = req.body.panNumber;
  users.user.password = req.body.password;
  if (users.user.password !== req.body.confirmPassword) {
    req.flash("message", "Password And Confirm Password don't match");
    // console.log("error");
    res.redirect("/signup");
  } else {
    // console.log( userData.findOne({aadharNumber:users.user.aadharNumber}));
    await userData.User
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
          await userData.User
            .findOne({ aadharNumber: users.user.aadharNumber })
            .then(async (user) => {
              if (user) {
                req.flash("message", "Aadhar Already Linked");
                // console.log("aadhar already exist");
                res.redirect("/signup");
              } else {
                await userData.User
                  .findOne({ panNumber: users.user.panNumber })
                  .then(async (user) => {
                    if (user) {
                      req.flash("message", "PAN Already Linked");
                      // console.log("pan already exist");
                      res.redirect("/signup");
                    } else {
                      await userData.User
                        .findOne({ phoneNumber: users.user.phoneNumber })
                        .then(async (user) => {
                          if (user) {
                            req.flash("message", "Phone Number Already Linked");
                            // console.log("phone number already exist");
                            res.redirect("/signup");
                          } else {
                           await userData.User
                              .findOne({ email: users.user.email })
                              .then(async (user) => {
                                if (user) {
                                  req.flash("message", "Email Already Linked");
                                  // console.log("email already exist");
                                  res.redirect("/signup");
                                } else {
                                  var OTP = otp.generateOTP();
                                  otp.getGeneratedotp(OTP);
                                  Email.send(
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
