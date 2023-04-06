(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  [
    "endpoints.TweetsApi-sendTweet",
    "endpoints.TweetsApi-BatchModeType",
    "endpoints.TweetsApi-postDefaults",
  ],
  {
    43153: (e) => {
      e.exports = {
        queryId: "K5kylRYkO5r0LS4Rtsyrwg",
        operationName: "CreateNoteTweet",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "tweetypie_unmention_optimization_enabled",
            "vibe_api_enabled",
            "responsive_web_edit_tweet_api_enabled",
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled",
            "view_counts_everywhere_api_enabled",
            "longform_notetweets_consumption_enabled",
            "tweet_awards_web_tipping_enabled",
            "interactive_text_enabled",
            "responsive_web_text_conversations_enabled",
            "longform_notetweets_richtext_consumption_enabled",
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "freedom_of_speech_not_reach_fetch_enabled",
            "standardized_nudges_misinfo",
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_enhance_cards_enabled",
          ],
        },
      };
    },
    53934: (e) => {
      e.exports = {
        queryId: "VtVTvbMKuYFBF9m1s4L1sw",
        operationName: "CreateTweet",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "tweetypie_unmention_optimization_enabled",
            "vibe_api_enabled",
            "responsive_web_edit_tweet_api_enabled",
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled",
            "view_counts_everywhere_api_enabled",
            "longform_notetweets_consumption_enabled",
            "tweet_awards_web_tipping_enabled",
            "interactive_text_enabled",
            "responsive_web_text_conversations_enabled",
            "longform_notetweets_richtext_consumption_enabled",
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "freedom_of_speech_not_reach_fetch_enabled",
            "standardized_nudges_misinfo",
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_enhance_cards_enabled",
          ],
        },
      };
    },
    58803: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { BatchModeType: () => i });
      const i = Object.freeze({
        SINGLE_TWEET: "off",
        FIRST_TWEET: "first",
        SUBSEQUENT_TWEET: "subsequent",
      });
    },
    80365: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { postDefaults: () => i });
      const i = { tweet_mode: "extended" };
    },
    51419: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          create_sendTweet: () => h,
          getAnnotationIdsCreateTweet: () => q,
          getBatchModeCreateTweet: () => k,
          getMediaAttachmentsCreateTweet: () => S,
          getTaggedUsersCreateTweet: () => E,
          isFatalCreateTweet: () => x,
        });
      n(36728);
      var i = n(6899),
        r = n(68811),
        _ = n.n(r),
        s = n(72599),
        o = n(31334),
        a = n(17360),
        l = n(83175),
        u = n(85364),
        d = n(43153),
        c = n.n(d),
        p = n(53934),
        w = n.n(p),
        b = n(50445),
        f = n(60348),
        v = n(58803),
        m = n(80365);
      function h(e) {
        const { apiClient: t, featureSwitches: n, tweetDefaults: r } = e;
        return function (e, s = {}) {
          var a, d;
          let p = { ...r(n), ...m.postDefaults, ...e };
          const v = (0, f.gQ)(p.promotedContent),
            h =
              "dual_test" === n.getStringValue("graphql_mutation_update_mode");
          "" === p.media_ids && delete p.media_ids,
            p.promotedContent &&
              ((p = { ...p, ...(0, f.cL)(p.promotedContent) }),
              delete p.promotedContent),
            p.exclusive_tweet_control_options &&
              (n.isTrue("super_follow_exclusive_tweet_creation_api_enabled") &&
                (p = {
                  ...p,
                  exclusive_tweet_content: p.exclusive_tweet_control_options,
                }),
              delete p.exclusive_tweet_control_options),
            null != (a = p.trusted_friends_control_options) &&
              a.trusted_friends_list_id &&
              (n.isTrue("trusted_friends_tweet_creation_enabled") &&
                (p = {
                  ...p,
                  trusted_friends_content: p.trusted_friends_control_options,
                }),
              delete p.trusted_friends_control_options);
          const y = {
              ...p,
              media_tags: p.media_tags ? JSON.stringify(p.media_tags) : void 0,
            },
            S = {
              ...((null == v || null == (d = v.engagement_request)
                ? void 0
                : d.impression_id) && { ...v }),
              ...(0, l.d)(n),
            },
            k = o.rh(p.status, n);
          if (
            "graphql_only" === n.getStringValue("graphql_mutation_update_mode")
          ) {
            if (k) {
              const r = { ...T({ options: e, featureSwitches: n }), ...S };
              return t.graphQL(c(), r, x).then((e) => {
                var t, n, r;
                const _ =
                  null !=
                  (t =
                    null == e ||
                    null == (n = e.notetweet_create) ||
                    null == (r = n.tweet_results)
                      ? void 0
                      : r.result)
                    ? t
                    : {};
                return (0, i.Fv)(_, u.Z);
              });
            }
            {
              const r = { ...g({ options: e, featureSwitches: n }), ...S };
              return t.graphQL(w(), r, x).then((e) => {
                var t, n, r;
                const _ =
                  null !=
                  (t =
                    null == e ||
                    null == (n = e.create_tweet) ||
                    null == (r = n.tweet_results)
                      ? void 0
                      : r.result)
                    ? t
                    : {};
                return (0, i.Fv)(_, u.Z);
              });
            }
          }
          if (h) {
            var q;
            const r = g({ options: e, featureSwitches: n }),
              o = _().v4();
            return (
              t.graphQL(
                w(),
                {
                  ...r,
                  comparison_id: o,
                  dark_request: !0,
                  ...((null == v || null == (q = v.engagement_request)
                    ? void 0
                    : q.impression_id) && { ...v }),
                  ...(0, l.d)(n),
                },
                x
              ),
              t
                .post("statuses/update", { ...y, comparison_id: o }, {}, s)
                .then((e) => (0, i.Fv)(e, b.Z))
            );
          }
          return t
            .post("statuses/update", y, {}, s)
            .then((e) => (0, i.Fv)(e, b.Z));
        };
      }
      function g(e) {
        const t = y(e),
          { richtext_options: n, ...i } = t;
        return i;
      }
      function T(e) {
        return y(e);
      }
      function y({ featureSwitches: e, options: t }) {
        var n, i;
        const r = S(t.media_ids, t.media_tags),
          _ =
            t.exclude_reply_user_ids && t.exclude_reply_user_ids.length
              ? t.exclude_reply_user_ids.split(",")
              : [],
          s = k(t.batch_mode),
          o = q(t.semantic_annotation_ids);
        return {
          tweet_text: t.status,
          card_uri: t.card_uri,
          attachment_url: t.attachment_url,
          ...((null == t ? void 0 : t.in_reply_to_status_id) && {
            reply: {
              in_reply_to_tweet_id: t.in_reply_to_status_id,
              exclude_reply_user_ids: _,
            },
          }),
          batch_compose: s,
          geo: null != (n = t.geo) ? n : void 0,
          dark_request: Boolean(t.preview),
          media: { media_entities: null != r ? r : [], possibly_sensitive: !1 },
          withDownvotePerspective: e.isTrue("rweb_reply_downvote_enabled"),
          withReactionsMetadata: e.isTrue("responsive_web_reactions_enabled"),
          withReactionsPerspective: e.isTrue(
            "responsive_web_reactions_enabled"
          ),
          semantic_annotation_ids: null != o ? o : [],
          conversation_control:
            "community" === t.conversation_control
              ? { mode: "Community" }
              : "by_invitation" === t.conversation_control
              ? { mode: "ByInvitation" }
              : void 0,
          exclusive_tweet_control_options: e.isTrue(
            "super_follow_exclusive_tweet_creation_api_enabled"
          )
            ? t.exclusive_tweet_control_options
            : void 0,
          trusted_friends_control_options:
            e.isTrue("trusted_friends_tweet_creation_enabled") &&
            null != (i = t.trusted_friends_control_options) &&
            i.trusted_friends_list_id
              ? t.trusted_friends_control_options
              : void 0,
          edit_options:
            (e.isTrue("subscriptions_feature_labs_1004") ||
              e.isTrue("responsive_web_edit_tweet_enabled")) &&
            t.previous_tweet_id
              ? { previous_tweet_id: t.previous_tweet_id }
              : void 0,
          richtext_options: t.richtext_options,
        };
      }
      function x(e, t) {
        let n;
        var i, r, _;
        if (null != t && t.notetweet_create)
          n =
            null == (i = t.notetweet_create.tweet_results) ||
            null == (r = i.result) ||
            null == (_ = r.legacy)
              ? void 0
              : _.id_str;
        else if (null != t && t.create_tweet) {
          var o, l, u;
          n =
            null == (o = t.create_tweet.tweet_results) ||
            null == (l = o.result) ||
            null == (u = l.legacy)
              ? void 0
              : u.id_str;
        }
        return (
          !n &&
          ((0, a.jB)(e) || (0, s.ZP)("GQL Create: Failed to create tweet"), !0)
        );
      }
      const S = (e, t) => {
          const n = e ? (null == e ? void 0 : e.split(",")) : void 0,
            i = n ? n[0] : void 0,
            r = i ? E(t, i) : [];
          return n
            ? null == n
              ? void 0
              : n.map((e) => ({ media_id: e, tagged_users: r }))
            : void 0;
        },
        k = (e) =>
          e === v.BatchModeType.FIRST_TWEET
            ? "BatchFirst"
            : e === v.BatchModeType.SUBSEQUENT_TWEET
            ? "BatchSubsequent"
            : void 0,
        q = (e) => {
          if (e && 0 !== e.length) {
            return e.split(",").map((e) => {
              const t = e.split(".");
              return { group_id: t[0], domain_id: t[1], entity_id: t[2] };
            });
          }
        },
        E = (e, t) => {
          const n = [];
          return (
            e &&
              Object.keys(e).length &&
              t &&
              e[t].forEach((e) => {
                n.push(e.user_id);
              }),
            n
          );
        };
    },
    83175: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => s, d: () => _ });
      var i = n(60917),
        r = n.n(i);
      const _ = (e) => {
          const t = e.isTrue("responsive_web_reactions_enabled");
          return {
            ...s(e),
            withDownvotePerspective: e.isTrue("rweb_reply_downvote_enabled"),
            withReactionsMetadata: t,
            withReactionsPerspective: t,
          };
        },
        s = (e) => r();
    },
    60348: (e, t, n) => {
      "use strict";
      n.d(t, { cL: () => _, gQ: () => s });
      const i = Object.freeze({});
      function r(e) {
        const { conversational_card_details: t } = e;
        return t ? { conversational_card_details: t } : void 0;
      }
      function _(e) {
        if (!e) return i;
        const { disclosure_type: t, impression_id: n } = e,
          _ = "earned" === o(e),
          s = JSON.stringify(r(e));
        if (!t || !n) return i;
        let a = { impression_id: n };
        return (
          s && (a = { ...a, engagement_metadata: s }),
          _ && (a = { ...a, earned: 1 }),
          a
        );
      }
      function s(e) {
        if (!e) return;
        const { disclosure_type: t, impression_id: n } = e,
          i = "earned" === o(e),
          _ = r(e);
        if (!t || !n) return;
        let s = { impression_id: n };
        return (
          _ && (s = { ...s, engagement_metadata: _ }),
          i && (s = { ...s, earned: !0 }),
          { engagement_request: { ...s } }
        );
      }
      function o(e) {
        const t = null == e ? void 0 : e.disclosure_type;
        return t && t.toLowerCase();
      }
    },
    31334: (e, t, n) => {
      "use strict";
      n.d(t, {
        rh: () => a,
        Bq: () => c,
        SC: () => l,
        v$: () => i,
        Oc: () => o,
      });
      var i = {};
      n.r(i), n.d(i, { readEnabled: () => u, writeEnabled: () => d });
      var r = n(40997),
        _ = n(37756);
      function s(e) {
        return e.isTrue("longform_notetweets_consumption_enabled");
      }
      function o(e) {
        const { featureSwitches: t, userClaims: n } = e;
        if (!n) return !1;
        if (!t.isTrue("longform_notetweets_tweet_storm_enabled") && e.isThread)
          return !1;
        if (!s(e.featureSwitches)) return !1;
        return (
          !!t.isTrue(
            "longform_notetweets_composition_without_claims_enabled"
          ) ||
          (n.isTrueAndEnabled("subscriptions_feature_1014") &&
            n.isTwitterBlueVerifiedSubscriber())
        );
      }
      function a(e, t) {
        if (
          !s((n = t)) ||
          (!n.isTrue("subscriptions_feature_1014") &&
            !n.isTrue("longform_notetweets_composition_without_claims_enabled"))
        )
          return !1;
        var n;
        const i = (0, _.k)(e),
          o = r.kh.maxWeightedTweetLength;
        return i.weightedLength > o;
      }
      function l(e, t) {
        if (!o(t)) return !1;
        return (0, _.k)(e, t).weightedLength > r.kh.maxWeightedTweetLength;
      }
      function u(e) {
        return e.isTrue("longform_notetweets_richtext_consumption_enabled");
      }
      function d(e) {
        if (!o(e)) return !1;
        return (
          1 ===
          e.featureSwitches.getNumberValue(
            "longform_notetweets_rich_composition_enabled",
            0
          )
        );
      }
      function c(e, t) {
        let n;
        return (
          (n =
            "boolean" == typeof t.forceEnabled
              ? t.forceEnabled
              : s(t.featureSwitches)),
          n && e.note_tweet
            ? {
                text: e.note_tweet.text,
                entities: e.note_tweet.entity_set,
                display_text_range: [0, e.note_tweet.text.length],
              }
            : {
                text: e.text,
                entities: e.entities,
                display_text_range: e.display_text_range,
              }
        );
      }
    },
    68469: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => r, p: () => _ });
      var i = n(59158);
      const r = n.n(i)().version3,
        _ = 260;
    },
    40997: (e, t, n) => {
      "use strict";
      n.d(t, {
        kh: () => r.k,
        pD: () => r.p,
        g0: () => o,
        WT: () => i,
        k2: () => _.k,
      });
      var i = n(37971),
        r = n(68469),
        _ = n(37756),
        s = n(73228);
      function o(e) {
        const t = Boolean(e && l[e]) ? 2 : 1;
        return function (e) {
          return a(Math.ceil(e / t));
        };
      }
      const a = n.n(s)().ia24dc8d,
        l = Object.freeze({ ja: !0, "zh-cn": !0, "zh-tw": !0, ko: !0 });
    },
    37971: (e, t, n) => {
      "use strict";
      function i(e) {
        return r(e) - 80;
      }
      function r(e) {
        return e.featureSwitches.getNumberValue(
          "longform_notetweets_max_weighted_character_length",
          4e3
        );
      }
      n.r(t), n.d(t, { max_count: () => r, warning_count: () => i });
    },
    37756: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => a });
      var i = n(45567),
        r = n.n(i),
        _ = n(31334),
        s = n(68469),
        o = n(37971);
      function a(e, t) {
        const n = (function (e) {
          if (!e) return s.k;
          if (!_.Oc(e)) return s.k;
          return { ...s.k, maxWeightedTweetLength: o.max_count(e) };
        })(t);
        return r()(e, n);
      }
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.TweetsApi-sendTweet.bdfdfa2a.js.map
