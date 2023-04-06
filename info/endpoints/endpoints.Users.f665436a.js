"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Users"],
  {
    55371: (e, t, n) => {
      n.r(t), n.d(t, { default: () => c, getGlobalDefaults: () => u });
      var r = n(6899),
        s = n(70151),
        i = n(13239),
        o = n(60348);
      const u = (e) => {
          const t = e.isTrue(
              "responsive_web_twitter_blue_verified_badge_is_enabled"
            ),
            n = e.isTrue("blue_business_consumption_api_enabled");
          return {
            include_profile_interstitial_type: 1,
            include_blocking: 1,
            include_blocked_by: 1,
            include_followed_by: 1,
            include_want_retweets: 1,
            include_mute_edge: 1,
            include_can_dm: 1,
            include_can_media_tag: 1,
            include_ext_has_nft_avatar: 1,
            ...(0, s.Z)(t ? { include_ext_is_blue_verified: 1 } : null),
            ...(0, s.Z)(n ? { include_ext_verified_type: 1 } : null),
            skip_status: 1,
          };
        },
        d = (e) => (0, r.Fv)(e, i.Z),
        _ = (e) => (0, r.Fv)(e, [i.Z]),
        c = ({ apiClient: e, featureSwitches: t }) => ({
          fetchUsers: (n, r = {}) =>
            e.get("users/lookup", { ...u(t), ...n }, r).then(_),
          follow(n, r = {}) {
            const { id_str: s, promotedContent: i, ..._ } = n,
              c = (0, o.cL)(i);
            return e
              .post(
                "friendships/create",
                { ...u(t), ...c, user_id: s, ..._ },
                {},
                r
              )
              .then(d);
          },
          unfollow(n, r = {}) {
            const { id_str: s, promotedContent: i, ..._ } = n,
              c = (0, o.cL)(i);
            return e
              .post(
                "friendships/destroy",
                { ...u(t), ...c, user_id: s, ..._ },
                {},
                r
              )
              .then(d);
          },
          cancelPendingFollow(t, n = {}) {
            const { id_str: r, ...s } = t;
            return e
              .post("friendships/cancel", { ...s, user_id: r }, {}, n)
              .then(d);
          },
          block(t, n = {}) {
            const { id_str: r, promotedContent: s, ...i } = t,
              u = (0, o.cL)(s);
            return e
              .post("blocks/create", { ...u, user_id: r, ...i }, {}, n)
              .then(d);
          },
          unblock(t, n = {}) {
            const { id_str: r, promotedContent: s, ...i } = t,
              u = (0, o.cL)(s);
            return e
              .post("blocks/destroy", { ...u, user_id: r, ...i }, {}, n)
              .then(d);
          },
          mute(t, n = {}) {
            const { id_str: r, promotedContent: s, ...i } = t,
              u = (0, o.cL)(s);
            return e
              .post("mutes/users/create", { ...u, user_id: r, ...i }, {}, n)
              .then(d);
          },
          unmute(t, n = {}) {
            const { id_str: r, promotedContent: s, ...i } = t,
              u = (0, o.cL)(s);
            return e
              .post("mutes/users/destroy", { ...u, user_id: r, ...i }, {}, n)
              .then(d);
          },
          fetchProfileTranslation(t, n = {}) {
            const { profileUserId: r } = t;
            return e.get(
              `strato/column/None/profileUserId=${r},destinationLanguage=None,translationSource=Some(Google)/translation/service/translateProfile`,
              {},
              n,
              ""
            );
          },
        });
    },
    60348: (e, t, n) => {
      n.d(t, { cL: () => i, gQ: () => o });
      const r = Object.freeze({});
      function s(e) {
        const { conversational_card_details: t } = e;
        return t ? { conversational_card_details: t } : void 0;
      }
      function i(e) {
        if (!e) return r;
        const { disclosure_type: t, impression_id: n } = e,
          i = "earned" === u(e),
          o = JSON.stringify(s(e));
        if (!t || !n) return r;
        let d = { impression_id: n };
        return (
          o && (d = { ...d, engagement_metadata: o }),
          i && (d = { ...d, earned: 1 }),
          d
        );
      }
      function o(e) {
        if (!e) return;
        const { disclosure_type: t, impression_id: n } = e,
          r = "earned" === u(e),
          i = s(e);
        if (!t || !n) return;
        let o = { impression_id: n };
        return (
          i && (o = { ...o, engagement_metadata: i }),
          r && (o = { ...o, earned: !0 }),
          { engagement_request: { ...o } }
        );
      }
      function u(e) {
        const t = null == e ? void 0 : e.disclosure_type;
        return t && t.toLowerCase();
      }
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Users.f665436a.js.map
