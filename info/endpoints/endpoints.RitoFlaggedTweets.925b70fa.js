(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.RitoFlaggedTweets"],
  {
    58912: (e) => {
      e.exports = {
        queryId: "IUZwHsa_tQ5Bu_1EsK23pw",
        operationName: "RitoFlaggedTweetsTimeline",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "tweetypie_unmention_optimization_enabled",
            "vibe_api_enabled",
            "responsive_web_edit_tweet_api_enabled",
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled",
            "view_counts_everywhere_api_enabled",
            "longform_notetweets_consumption_enabled",
            "tweet_awards_web_tipping_enabled",
            "freedom_of_speech_not_reach_fetch_enabled",
            "standardized_nudges_misinfo",
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled",
            "interactive_text_enabled",
            "responsive_web_text_conversations_enabled",
            "longform_notetweets_richtext_consumption_enabled",
            "responsive_web_enhance_cards_enabled",
          ],
        },
      };
    },
    89910: (e, t, _) => {
      "use strict";
      _.r(t),
        _.d(t, {
          default: () => d,
          isFatalRitoFlaggedTweetsTimelineError: () => o,
        });
      var i = _(72599),
        n = _(17360),
        s = _(83175),
        r = _(58912),
        a = _.n(r),
        l = _(82249);
      const o = (e, t) => {
          var _;
          const s =
            null == t || null == (_ = t.user_result_by_rest_id)
              ? void 0
              : _.result;
          return (
            s ||
              (0, i.ZP)(
                "GQL RitoFlaggedTweets: Failed to query for Rito Flagged Tweets timeline"
              ),
            !s && (0, n.jB)(e)
          );
        },
        d = ({ apiClient: e, featureSwitches: t }) => ({
          fetchRitoFlaggedTweets: ({ cursor: _, userId: i }) =>
            e
              .graphQL(
                a(),
                {
                  cursor: _,
                  rest_id: i,
                  ...(0, s.d)(t),
                  withSafetyModeUserFields: t.isTrue(
                    "rito_safety_mode_blocked_profile_enabled"
                  ),
                },
                o
              )
              .then((e) => {
                var t;
                const _ =
                  null == e || null == (t = e.user_result_by_rest_id)
                    ? void 0
                    : t.result;
                let i = l.cY;
                var n;
                "User" === (null == _ ? void 0 : _.__typename) &&
                  (i =
                    null == (n = _.rito_flagged_tweets_timeline)
                      ? void 0
                      : n.timeline);
                return i || l.cY;
              }),
        });
    },
    83175: (e, t, _) => {
      "use strict";
      _.d(t, { S: () => r, d: () => s });
      var i = _(60917),
        n = _.n(i);
      const s = (e) => {
          const t = e.isTrue("responsive_web_reactions_enabled");
          return {
            ...r(e),
            withDownvotePerspective: e.isTrue("rweb_reply_downvote_enabled"),
            withReactionsMetadata: t,
            withReactionsPerspective: t,
          };
        },
        r = (e) => n();
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.RitoFlaggedTweets.925b70fa.js.map
