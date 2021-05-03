module.exports = [
  {
    param: "referrals/active",
    method: "GET",
    callback: function (req, res) {
      setTimeout(() => {
        res.json({
          success: true,
          result: [
            {
              referredOn: "14 Aug 2020",
              expiredOn: "14 Aug 2020",
              sentTo: "Annie Tan",
              sentBy: null,
              email: "annie1@gmail.com",
              referralCode: "VU3ARE",
              status: "active",
            },
            {
              referredOn: "14 Aug 2020",
              expiredOn: "14 Aug 2020",
              sentTo: null,
              sentBy: "Annie Tan",
              email: "annie2@gmail.com",
              referralCode: "VU3ARE",
              status: "active",
            },
            {
              referredOn: "14 Aug 2020",
              expiredOn: "14 Aug 2020",
              sentTo: null,
              sentBy: "Annie Tan",
              email: "annie3@gmail.com",
              referralCode: "VU3ARE",
              status: "active",
            },
          ],
        });
      }, 2000);
    },
  },
  {
    param: "referrals/expired",
    method: "GET",
    callback: function (req, res) {
      res.json({
        success: true,
        result: [
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: "Annie Tan",
            sentBy: null,
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "expired",
          },
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: null,
            sentBy: "Annie Tan",
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "expired",
          },
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: null,
            sentBy: "Annie Tan",
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "expired",
          },
        ],
      });
    },
  },
  {
    param: "referrals/success",
    method: "GET",
    callback: function (req, res) {
      res.json({
        success: true,
        result: [
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: null,
            sentBy: "Annie Tan",
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "success",
          },
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: "Annie Tan",
            sentBy: null,
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "success",
          },
          {
            referredOn: "14 Aug 2020",
            expiredOn: "14 Aug 2020",
            sentTo: "Annie Tan",
            sentBy: null,
            email: "annie@gmail.com",
            referralCode: "VU3ARE",
            status: "success",
          },
        ],
      });
    },
  },
];
