(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.SubscriptionPayments"],
  {
    49390: (e) => {
      e.exports = {
        queryId: "2LHXrd1uYeaMWhciZgPZFw",
        operationName: "CreateCustomerPortalSession",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    81141: (e) => {
      e.exports = {
        queryId: "wwdBYgScze0_Jnan79jEUw",
        operationName: "ListProductSubscriptions",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    80295: (e) => {
      e.exports = {
        queryId: "hKfOOObQr5JmfmxW0YtPvg",
        operationName: "SubscriptionCheckoutUrlWithEligibility",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    9105: (e) => {
      e.exports = {
        queryId: "f0dExZDmFWFSWMCPQSAemQ",
        operationName: "SubscriptionProductDetails",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    15404: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => d });
      var i = r(49390),
        o = r.n(i),
        s = r(81141),
        a = r.n(s),
        u = r(80295),
        n = r.n(u),
        c = r(9105),
        p = r.n(c);
      const d = ({ apiClient: e, featureSwitches: t }) => ({
        fetchSubscriptionProductDetails: (t) =>
          e.graphQL(p(), t).then((e) => e.web_subscription_product_details),
        fetchSubscriptionProductCheckoutUrl: (t) =>
          e.graphQL(n(), t).then((e) => {
            var t;
            return null == (t = e.subscriptioncheckoutsession_create_for_blue)
              ? void 0
              : t.session_url;
          }),
        fetchProductSubscriptions: (t) =>
          e.graphQL(a(), t).then((e) => {
            var t;
            return null == (t = e.viewer_v2)
              ? void 0
              : t.list_product_subscriptions;
          }),
        fetchSubscriptionProductCustomerPortalUrl: (t) =>
          e.graphQL(o(), t).then((e) => {
            var t;
            return null == (t = e.customerportalsession_create)
              ? void 0
              : t.customer_portal_session_url;
          }),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.SubscriptionPayments.d63d718a.js.map
