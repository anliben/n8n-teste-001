# [1.100.0](https://github.com/n8n-io/n8n/compare/n8n@1.99.0...n8n@1.100.0) (2025-06-23)


### Bug Fixes

* **AWS DynamoDB Node:** Incorrect parameter names ([#16408](https://github.com/n8n-io/n8n/issues/16408)) ([dd2ed90](https://github.com/n8n-io/n8n/commit/dd2ed90b954b00897c7883da9b4dea1d0aa6043a))
* **core:** Add Dingbat emojis to expressions grammar ([#16545](https://github.com/n8n-io/n8n/issues/16545)) ([ddd3908](https://github.com/n8n-io/n8n/commit/ddd390823418b69d7370f8b973fdea13f77593de))
* **core:** Add missing version label to docker image ([#16386](https://github.com/n8n-io/n8n/issues/16386)) ([4e73c40](https://github.com/n8n-io/n8n/commit/4e73c407392d65cc14f1818ffcd135821bdeabb9))
* **core:** Ensure updatedAt field exists on folder object for source control ([#16437](https://github.com/n8n-io/n8n/issues/16437)) ([81dd215](https://github.com/n8n-io/n8n/commit/81dd215ff96d1db2dc5068793f9bebeb84a557fa))
* **core:** Fix module path resolution for Docker ([#16623](https://github.com/n8n-io/n8n/issues/16623)) ([b5ba655](https://github.com/n8n-io/n8n/commit/b5ba6558631b30f41fca42b7e3ee5f34221ad603))
* **core:** Fix pdf extract for arm64 docker images ([#16522](https://github.com/n8n-io/n8n/issues/16522)) ([20e2d8e](https://github.com/n8n-io/n8n/commit/20e2d8e36f0fa68d8a4d6909e8cba828f5de519f))
* **core:** Fix pdf extract not working ([#16463](https://github.com/n8n-io/n8n/issues/16463)) ([c480d3c](https://github.com/n8n-io/n8n/commit/c480d3cc6a9f015a1262ea52988b32825f05a183))
* **core:** Handle dynamic webhook edge cases ([#16554](https://github.com/n8n-io/n8n/issues/16554)) ([1573ae6](https://github.com/n8n-io/n8n/commit/1573ae63522ccf72ea63d988ed01eaf82e85376b))
* **core:** Incorrect data returned by the node when using retry on error + continue on error ([#16516](https://github.com/n8n-io/n8n/issues/16516)) ([f598b3b](https://github.com/n8n-io/n8n/commit/f598b3bf00a37fc9c89639b438bc8f25438fbae0))
* **core:** Prevent unauthorised workflow termination ([#16405](https://github.com/n8n-io/n8n/issues/16405)) ([29752ea](https://github.com/n8n-io/n8n/commit/29752ead000ac002ba3606ddda15b552ad2d3048))
* **core:** Reset destination node after partial execution of tools ([#16376](https://github.com/n8n-io/n8n/issues/16376)) ([c365327](https://github.com/n8n-io/n8n/commit/c3653275f2cc7b3934c221a74e0f118e317cbb70))
* **core:** Show correct error messages when nodes can't be used in an expression ([#16549](https://github.com/n8n-io/n8n/issues/16549)) ([48644ca](https://github.com/n8n-io/n8n/commit/48644ca2f8bb0c1c2bf85edfda8d704d92cc2fb8))
* **editor:** Fix and enable copying to clipboard in PiP ([#15632](https://github.com/n8n-io/n8n/issues/15632)) ([f9f0fdf](https://github.com/n8n-io/n8n/commit/f9f0fdf40dddd84d52c5cdb7ea58c98d9cf862e0))
* **editor:** Fix keyboard shortcut bugs in the log view ([#16393](https://github.com/n8n-io/n8n/issues/16393)) ([4acebab](https://github.com/n8n-io/n8n/commit/4acebabb4fcff0cc982f8360e36fdbfda871982f))
* **editor:** Fix log view style bugs ([#16312](https://github.com/n8n-io/n8n/issues/16312)) ([58a5564](https://github.com/n8n-io/n8n/commit/58a556430c982e3b7db12d8dfb59f55cc4609a18))
* **editor:** Make adjustments to status icon and connector port position in canvas ([#16469](https://github.com/n8n-io/n8n/issues/16469)) ([3ea51c1](https://github.com/n8n-io/n8n/commit/3ea51c11cb264fe5be036d81c068633e933f9b26))
* **editor:** New quick start video URL ([#16546](https://github.com/n8n-io/n8n/issues/16546)) ([a9688b1](https://github.com/n8n-io/n8n/commit/a9688b101ff6cac439070d045ee6f5bec321e627))
* **editor:** Quick fix to password change form validation ([#16565](https://github.com/n8n-io/n8n/issues/16565)) ([ef28d25](https://github.com/n8n-io/n8n/commit/ef28d25ba2d4e00b86ccc8db94cbc236f7ce1dbd))
* **editor:** Recommend Simple Vector Store even if WF has no AI nodes ([#16514](https://github.com/n8n-io/n8n/issues/16514)) ([7d8049b](https://github.com/n8n-io/n8n/commit/7d8049b7f9ea9ea1500034ec3483d1c63d9a5136))
* **editor:** Set workflow project to be shown in the breadcrumb ([#16586](https://github.com/n8n-io/n8n/issues/16586)) ([d23e101](https://github.com/n8n-io/n8n/commit/d23e1016a8ec9e2b78a0454fff514a8065a670e3))
* **Embeddings Google Gemini Node:** Use credential host as baseUrl  ([#16615](https://github.com/n8n-io/n8n/issues/16615)) ([662ac1b](https://github.com/n8n-io/n8n/commit/662ac1bb5732cec7e22fbe109621d85b00a4a9ad))
* **Execute Sub-workflow Node:** Don't expose the file contens when reading the workflow from a file and it's not valid JSON ([#16416](https://github.com/n8n-io/n8n/issues/16416)) ([879d204](https://github.com/n8n-io/n8n/commit/879d204bdbefa064868dd540e66512f5d497fd91))
* Fix examples for `Array#includes` method ([#16360](https://github.com/n8n-io/n8n/issues/16360)) ([16b0297](https://github.com/n8n-io/n8n/commit/16b0297f8558aad0ef259a15fe220dedc47f25c9))
* Fix paired item for Merge node with mode=chooseBranch ([#16552](https://github.com/n8n-io/n8n/issues/16552)) ([921f20a](https://github.com/n8n-io/n8n/commit/921f20a28378e2ab2a1f6c19de2ca460c9afc919))
* Fix paired item handling of multiple inputs ([#16309](https://github.com/n8n-io/n8n/issues/16309)) ([083073e](https://github.com/n8n-io/n8n/commit/083073e541ccb91c1c77d1ec3442655e843aed3d))
* Fix paired item handling of multiple inputs ([#16479](https://github.com/n8n-io/n8n/issues/16479)) ([95f8602](https://github.com/n8n-io/n8n/commit/95f860231edea49f9535ac4aa8bfdf5a3e8d2b81))
* **GitHub Node:** Tolerate trailing slash in file path ([#15517](https://github.com/n8n-io/n8n/issues/15517)) ([2f6896c](https://github.com/n8n-io/n8n/commit/2f6896cc7bcf7349582dd26657871684577bbafb))
* **Google Ads Node:** Migrate from deprecated v17 API ([#16388](https://github.com/n8n-io/n8n/issues/16388)) ([bdc6e0f](https://github.com/n8n-io/n8n/commit/bdc6e0f784f7834f0ee23ff9f8abe93aa9034fa2))
* **MongoDB Atlas Vector Store Node:** Old credentials used even after credentials are updated/changed ([#16471](https://github.com/n8n-io/n8n/issues/16471)) ([9346463](https://github.com/n8n-io/n8n/commit/9346463c6bd353e50ed769a8fc633042b434b85f))
* **n8n Form Node:** Prevent XSS with video and source tags ([#16329](https://github.com/n8n-io/n8n/issues/16329)) ([759e555](https://github.com/n8n-io/n8n/commit/759e5559931779a2adb8a6c47e85947fac09950a))
* **n8n Form Node:** Update Breaking Changes Doc ([#16392](https://github.com/n8n-io/n8n/issues/16392)) ([549a541](https://github.com/n8n-io/n8n/commit/549a5412195098a3a736111c35d1ff015361588c))
* **n8n Form Node:** Update version in Breaking Changes doc ([#16418](https://github.com/n8n-io/n8n/issues/16418)) ([04bdd01](https://github.com/n8n-io/n8n/commit/04bdd01a42556c193133e94ff2e5e438feefc38e))
* **Notion Node:** Typo in the condition type ([#16525](https://github.com/n8n-io/n8n/issues/16525)) ([e413af4](https://github.com/n8n-io/n8n/commit/e413af46ceca1e89a73ac4718d15b9c4845b5358))
* **Stripe Trigger Node:** Adds API version specification ([#16232](https://github.com/n8n-io/n8n/issues/16232)) ([2efd21e](https://github.com/n8n-io/n8n/commit/2efd21e0834c244f3c3d7a642d137d6df873ef6a))
* **Telegram Node:** "source.on is not a function" in Telegram with binary file and Reply Markup ([#16458](https://github.com/n8n-io/n8n/issues/16458)) ([4661e03](https://github.com/n8n-io/n8n/commit/4661e03f9387627dc257cd71880b42ad21eeb828))
* When community node added as tool, don't show details view  ([#16539](https://github.com/n8n-io/n8n/issues/16539)) ([dadbd5f](https://github.com/n8n-io/n8n/commit/dadbd5fafe744259cfea3d368c334b0a397894f5))


### Features

* Add model selector node ([#16371](https://github.com/n8n-io/n8n/issues/16371)) ([79650ea](https://github.com/n8n-io/n8n/commit/79650ea55add39e13791045d1caed45a46801290))
* **core:** Add queue events to log streaming ([#16427](https://github.com/n8n-io/n8n/issues/16427)) ([93ac46c](https://github.com/n8n-io/n8n/commit/93ac46c581d0d5a36664cdbbe36ddfe7f12e5b0f))
* **core:** Extend user list to allow expanding the user list to projects ([#16314](https://github.com/n8n-io/n8n/issues/16314)) ([c0d1ff6](https://github.com/n8n-io/n8n/commit/c0d1ff6e4c6cd973011f17404b100f0381b52797))
* **editor:** Add OIDC paywall ([#16347](https://github.com/n8n-io/n8n/issues/16347)) ([1da3c70](https://github.com/n8n-io/n8n/commit/1da3c70507f86fc59a9c43eb43fd89c3628b7ee6))
* **editor:** Add Support for Granular Push of Credentials and Workflows ([#16439](https://github.com/n8n-io/n8n/issues/16439)) ([49b9439](https://github.com/n8n-io/n8n/commit/49b9439ec00a1153ede94f7d6787791e9b8a4d9d))
* **editor:** Add tracking on oidc save setting ([#16378](https://github.com/n8n-io/n8n/issues/16378)) ([62a33e8](https://github.com/n8n-io/n8n/commit/62a33e8074a40fd3fbe6b840cc420dc3cae14e17))
* **MCP Server Trigger Node:** Terminate sessions on DELETE request ([#16550](https://github.com/n8n-io/n8n/issues/16550)) ([3969425](https://github.com/n8n-io/n8n/commit/3969425925b0f67d6d95d8295c80f0b2315c0465))
* **Token Splitter Node:** Replace remote tiktoken encoding with local implementation ([#16548](https://github.com/n8n-io/n8n/issues/16548)) ([2d63802](https://github.com/n8n-io/n8n/commit/2d638023be75819ee11b1d5e0a6768c6b61dc8b7))



# [1.99.0](https://github.com/n8n-io/n8n/compare/n8n@1.98.0...n8n@1.99.0) (2025-06-16)


### Bug Fixes

* **AWS Bedrock Chat Model Node:** Update LangChain AWS package ([#16323](https://github.com/n8n-io/n8n/issues/16323)) ([24e4be1](https://github.com/n8n-io/n8n/commit/24e4be1ece1f5c1911f27b572862e7a2c95447bf))
* **core:** Always save evaluation executions ([#16285](https://github.com/n8n-io/n8n/issues/16285)) ([739ad85](https://github.com/n8n-io/n8n/commit/739ad853cd81b108171e91488dad95cd0a2db5c1))
* **core:** Fix http requests by using correct agent ([#16258](https://github.com/n8n-io/n8n/issues/16258)) ([e58de1a](https://github.com/n8n-io/n8n/commit/e58de1a6e48868356e4e706effd384cdf5073652))
* **core:** Prevent DoS via malformed binary data ID ([#16229](https://github.com/n8n-io/n8n/issues/16229)) ([43c52a8](https://github.com/n8n-io/n8n/commit/43c52a8b4f844e91b02e3cc9df92826a2d7b6052))
* **core:** Register transition handlers after modules init ([#16308](https://github.com/n8n-io/n8n/issues/16308)) ([7177e3a](https://github.com/n8n-io/n8n/commit/7177e3aab082cc7964698221a9440cd92dfaed03))
* **core:** Remove duplicated logs for insights ([#16228](https://github.com/n8n-io/n8n/issues/16228)) ([56b16b8](https://github.com/n8n-io/n8n/commit/56b16b8c0fb4cff4d51134ef532dede4ccac2707))
* **editor:** Cannot expand sub execution log if it finished with an error ([#16236](https://github.com/n8n-io/n8n/issues/16236)) ([3fcabd4](https://github.com/n8n-io/n8n/commit/3fcabd40b3ea0a311dc55f35e5c6f72c2f53efa7))
* **editor:** Fix inaccurate message in log view when input data is empty ([#16234](https://github.com/n8n-io/n8n/issues/16234)) ([e93fd1a](https://github.com/n8n-io/n8n/commit/e93fd1a68931eba43e7cdd0902543b056c0ab40a))
* **editor:** Fix pagination and sorting issue for insights ([#16288](https://github.com/n8n-io/n8n/issues/16288)) ([84c51b1](https://github.com/n8n-io/n8n/commit/84c51b1bd96b2a66cfb4953b349df73ce65cf29c))
* **editor:** Logs not shown when tools are partially executed ([#16274](https://github.com/n8n-io/n8n/issues/16274)) ([b2eb333](https://github.com/n8n-io/n8n/commit/b2eb33351f4eec0dfafcc8fb22b093779facd8f4))
* **editor:** Prevent node renaming to restricted JS method names ([#16270](https://github.com/n8n-io/n8n/issues/16270)) ([ecfb667](https://github.com/n8n-io/n8n/commit/ecfb6674efb657e27771785f1e0cdb890c0c78da))
* **editor:** Support renaming node in HTML parameters ([#16315](https://github.com/n8n-io/n8n/issues/16315)) ([88e3c90](https://github.com/n8n-io/n8n/commit/88e3c90e7136acdaf712c79fbd23d484d2d88f66))
* Fix paired item handling of multiple inputs ([#16153](https://github.com/n8n-io/n8n/issues/16153)) ([50e00cd](https://github.com/n8n-io/n8n/commit/50e00cdd6ac9f36e445f2b290e3b39ee7848fa13))
* **Gmail Node:** Do not break threads while creating drafts ([#16272](https://github.com/n8n-io/n8n/issues/16272)) ([113d94c](https://github.com/n8n-io/n8n/commit/113d94cea2956dafcecff2bb33df15d417daeb40))
* **HTTP Request Node:** Process text files ([#16226](https://github.com/n8n-io/n8n/issues/16226)) ([0d5ac1f](https://github.com/n8n-io/n8n/commit/0d5ac1f82262e1c32b4d3d7168f433359f4a1b87))
* Postgres node with ssh tunnel getting into a broken state and not being recreated ([#16054](https://github.com/n8n-io/n8n/issues/16054)) ([879114b](https://github.com/n8n-io/n8n/commit/879114b572d4c3ef969f1e4495eedcbef486c3d6))
* Run evaluations as full manual executions in queue mode ([#16230](https://github.com/n8n-io/n8n/issues/16230)) ([e363458](https://github.com/n8n-io/n8n/commit/e36345824f2e5c3fd79ff9e27fe3d68bcee999fd))
* Run evaluations successfully when offload manual executions is true with queue mode ([#16307](https://github.com/n8n-io/n8n/issues/16307)) ([aa27374](https://github.com/n8n-io/n8n/commit/aa273745ecdb45070f028a03fbd339dc3a15ce56))


### Features

* **Chat Trigger Node:** Fix CSS variable `--chat--message--font-size` not applying correctly ([#16310](https://github.com/n8n-io/n8n/issues/16310)) ([ab8a2b0](https://github.com/n8n-io/n8n/commit/ab8a2b0f7ed91bc2bcd084b9dc94e76a3426da8a))
* **core:** Add description to projects ([#15611](https://github.com/n8n-io/n8n/issues/15611)) ([1ddbb78](https://github.com/n8n-io/n8n/commit/1ddbb78909a06c46e2bee640c85bf7670d85b8d5))
* **core:** Add number of tokens and latency automatically as metrics in evaluation ([#16243](https://github.com/n8n-io/n8n/issues/16243)) ([eff0571](https://github.com/n8n-io/n8n/commit/eff0571f42b979146d1198d6ca7c010c0013067d))
* **core:** Add OIDC support for SSO ([#15988](https://github.com/n8n-io/n8n/issues/15988)) ([30148df](https://github.com/n8n-io/n8n/commit/30148df7f3fd7b49660d1f4635a577d9bb80e964))
* **core:** Add task runner events to log streaming ([#16265](https://github.com/n8n-io/n8n/issues/16265)) ([46723d3](https://github.com/n8n-io/n8n/commit/46723d3518b4d37e51363e49fae2216a4cb96e08))
* **core:** Handle scoped resource not existing with 404 ([#16022](https://github.com/n8n-io/n8n/issues/16022)) ([42b9a8a](https://github.com/n8n-io/n8n/commit/42b9a8a0e7c935af4153f6d3ccdbf06ba2545b20))
* **editor:** Add access control and not found entity views ([#15860](https://github.com/n8n-io/n8n/issues/15860)) ([80a784a](https://github.com/n8n-io/n8n/commit/80a784a50c64c24c704f718633569c941549a4e6))
* **editor:** Add RAG starter template callouts experiment ([#16282](https://github.com/n8n-io/n8n/issues/16282)) ([d0a313a](https://github.com/n8n-io/n8n/commit/d0a313aa1cdafdc49afdf5fbb036209cf92c4a3b))
* **editor:** Change default node names depending on node operation and resource ([#16188](https://github.com/n8n-io/n8n/issues/16188)) ([4e94488](https://github.com/n8n-io/n8n/commit/4e94488622c381e5c762d432419fd49e8a92c022))
* **editor:** Move element plus plugin config to design system test setup ([#16319](https://github.com/n8n-io/n8n/issues/16319)) ([3864f0e](https://github.com/n8n-io/n8n/commit/3864f0e1c1954138311ed363a10ec30a3a63950d))
* **editor:** Remember different panel state for sub nodes ([#16189](https://github.com/n8n-io/n8n/issues/16189)) ([b9e0351](https://github.com/n8n-io/n8n/commit/b9e03515bd6f3d048e4df9d312366e40eb7cc123))
* **editor:** Show node type on hover over node icon in NDV ([#16278](https://github.com/n8n-io/n8n/issues/16278)) ([396da25](https://github.com/n8n-io/n8n/commit/396da25c625617d111a64ef44b52e41335ae81fb))
* **Linear Node:** Add options to add a link and a comment to an issue ([#13464](https://github.com/n8n-io/n8n/issues/13464)) ([a417ed3](https://github.com/n8n-io/n8n/commit/a417ed3ac81bbc39b5cee7b065a0fd13214b3490))
* **MCP Server Trigger Node:** Support for Streamable HTTP transport in MCP Server ([#15833](https://github.com/n8n-io/n8n/issues/15833)) ([8d6e796](https://github.com/n8n-io/n8n/commit/8d6e796b9225c7b85ab3b1c67eec0dd6b31d6775))


### Performance Improvements

* **core:** Lazyload AI workflow builder's langchain dependencies ([#16178](https://github.com/n8n-io/n8n/issues/16178)) ([f0cf6dc](https://github.com/n8n-io/n8n/commit/f0cf6dcbcdfaae86233c6fdac8795bd7f2111d3c))
* **core:** Skip init for unlicensed modules ([#16311](https://github.com/n8n-io/n8n/issues/16311)) ([cb81826](https://github.com/n8n-io/n8n/commit/cb81826cf16a215e1da08432e5bb6ce29db1099e))



# [1.98.0](https://github.com/n8n-io/n8n/compare/n8n@1.97.0...n8n@1.98.0) (2025-06-11)


### Bug Fixes

* Add a missing word to tooltip ([#16198](https://github.com/n8n-io/n8n/issues/16198)) ([0cfe6ee](https://github.com/n8n-io/n8n/commit/0cfe6eeb5de593093582c67842d4df37aaacc6c2))
* **AI Agent Node:** Allow using LangChain code node as a model for AI Agent ([#16096](https://github.com/n8n-io/n8n/issues/16096)) ([cb3bb91](https://github.com/n8n-io/n8n/commit/cb3bb915df88e2037969cd5664508e377b0f69fa))
* **Anthropic Chat Model Node:** Fix LmChatAnthropic node to work when both thinking is enabled and tools used   ([#16010](https://github.com/n8n-io/n8n/issues/16010)) ([e662998](https://github.com/n8n-io/n8n/commit/e662998c67795fcce397fef6989ba9a8d79b2b6f))
* **Chat Memory Manager Node:** Fix simplifyMessages to not overwrite consecutive messages of same type ([#16168](https://github.com/n8n-io/n8n/issues/16168)) ([5015290](https://github.com/n8n-io/n8n/commit/5015290dbeb29aac2a5f1cc3b25937661d9b458d))
* **Code Node:** Block selected module imports in python code ([#15970](https://github.com/n8n-io/n8n/issues/15970)) ([1e92729](https://github.com/n8n-io/n8n/commit/1e927294923d96b7d7c972cb35078df79a673822))
* **core:** Correctly apply maxRows limit when fetching the dataset ([#16176](https://github.com/n8n-io/n8n/issues/16176)) ([09fd5c0](https://github.com/n8n-io/n8n/commit/09fd5c01d4f044a30f9fedf7c0f3f7be1acd5313))
* **core:** Don't load task-runner on main instances when manual executions are offloaded to workers ([#15986](https://github.com/n8n-io/n8n/issues/15986)) ([23ce60d](https://github.com/n8n-io/n8n/commit/23ce60d6466b387df50688c29c0db63c899922c0))
* **core:** Don't swallow connection errors when fetching credentials ([#16181](https://github.com/n8n-io/n8n/issues/16181)) ([9f83fcc](https://github.com/n8n-io/n8n/commit/9f83fccac1909a3ca8792bd96a88b538f20476fb))
* **core:** Ensure queue is ready when enqueueing ([#16098](https://github.com/n8n-io/n8n/issues/16098)) ([25567f6](https://github.com/n8n-io/n8n/commit/25567f6f0efde0f8725ecf68d6e6b930c368e554))
* **core:** Fix HTTP proxy support in all nodes and other axios requests ([#16092](https://github.com/n8n-io/n8n/issues/16092)) ([e3675bd](https://github.com/n8n-io/n8n/commit/e3675bdfb41d372ddd5dcb9f8609416274b96309))
* **core:** Prevent worker from recovering finished executions ([#16094](https://github.com/n8n-io/n8n/issues/16094)) ([53b6812](https://github.com/n8n-io/n8n/commit/53b681259255a695b3b6e8c581c88282877ac3ed))
* **core:** Prometheus metrics can't be ingested by datadog ([#15910](https://github.com/n8n-io/n8n/issues/15910)) ([d00060a](https://github.com/n8n-io/n8n/commit/d00060adadfe1631384ccaebd35c00a2faa63fde))
* **core:** Resolves response promise for active execution on job finished in queue mode ([#15643](https://github.com/n8n-io/n8n/issues/15643)) ([7cd7883](https://github.com/n8n-io/n8n/commit/7cd7883b34893a904315f9e65aff2bf3497f99e2))
* **core:** Start insights collection timer for webhook instances ([#15964](https://github.com/n8n-io/n8n/issues/15964)) ([7a67dcb](https://github.com/n8n-io/n8n/commit/7a67dcb6861c3e38796a0a68daa0e33ed603b3c7))
* **core:** Unloading a community package should also unload all its files from `require.cache` ([#16072](https://github.com/n8n-io/n8n/issues/16072)) ([8c63ca7](https://github.com/n8n-io/n8n/commit/8c63ca7d57761cf0a3168a6f7da102426134d1fc))
* Detect if n8n instance is staging or production for community nodes ([#15918](https://github.com/n8n-io/n8n/issues/15918)) ([63cf9af](https://github.com/n8n-io/n8n/commit/63cf9afe6501d5b23443551911311536a9fb9538))
* **editor:** Add right margin to AI Assistant Code Node 'Fix Error' replace code button icon ([#15956](https://github.com/n8n-io/n8n/issues/15956)) ([ebff88c](https://github.com/n8n-io/n8n/commit/ebff88cb44c470d7802a6a353a08de6a7b97f683))
* **editor:** Add user role tooltip to personal settings page ([#15941](https://github.com/n8n-io/n8n/issues/15941)) ([2c9c3da](https://github.com/n8n-io/n8n/commit/2c9c3dab3360f6eee697a6571ce2de80e32f091c))
* **editor:** Add visual-only `waitingForNext` execution state for slow networks ([#16143](https://github.com/n8n-io/n8n/issues/16143)) ([5deab75](https://github.com/n8n-io/n8n/commit/5deab75c7ddbc818e5d0cee4e2b85352ab682538))
* **editor:** Fix regExp to allow "." in Git repository URL (SSH) ([#15972](https://github.com/n8n-io/n8n/issues/15972)) ([88caa21](https://github.com/n8n-io/n8n/commit/88caa21bb4b667915afc8ec5bb4d2f9e0ec6b6e0))
* **editor:** Fix the issue that the content of json, html, csv, md, txt, and css files contained garbled Chinese characters when clicking the view button ([#16118](https://github.com/n8n-io/n8n/issues/16118)) ([cdab4c1](https://github.com/n8n-io/n8n/commit/cdab4c1bc698e3ebfffe7cd93eec3baa225062a8))
* **editor:** Fix the issue with icon Emojis not being centered ([#16067](https://github.com/n8n-io/n8n/issues/16067)) ([b7d3945](https://github.com/n8n-io/n8n/commit/b7d394542f5cdac0c7e05f286ae30390695cacb5))
* **editor:** Hide the Github stars button when telemetry is disabled ([#16108](https://github.com/n8n-io/n8n/issues/16108)) ([b92d8ad](https://github.com/n8n-io/n8n/commit/b92d8ad1e16e72911385a834643d89a8970cad48))
* **editor:** In Sub-workflow Conversion handle standalone accessor and accessor[0] cases correctly ([#16086](https://github.com/n8n-io/n8n/issues/16086)) ([eb71c41](https://github.com/n8n-io/n8n/commit/eb71c41e9340d46ddf4f74b3622caaf404e4c3f5))
* **editor:** Log view is missing in debug mode ([#16170](https://github.com/n8n-io/n8n/issues/16170)) ([6703554](https://github.com/n8n-io/n8n/commit/670355420d6cb42d4d1775138a485bfc542aa79f))
* **editor:** Maintain back button when installing community nodes ([#16069](https://github.com/n8n-io/n8n/issues/16069)) ([7492944](https://github.com/n8n-io/n8n/commit/7492944a37584d510940f8ee0a2f77fc6ff6a8cd))
* **editor:** Mark workflow as unsaved when reverting deletion of a node ([#15959](https://github.com/n8n-io/n8n/issues/15959)) ([9cf7293](https://github.com/n8n-io/n8n/commit/9cf729399093d46d207d89c60de8472e9d2043a7))
* **editor:** Position executions filter popover so that it doesn't hide executions ([#16049](https://github.com/n8n-io/n8n/issues/16049)) ([576ff4d](https://github.com/n8n-io/n8n/commit/576ff4d3b89b62f4c125074e05e011a7453033ae))
* **editor:** Prevent Ask Assistant button overlapping other buttons ([#16066](https://github.com/n8n-io/n8n/issues/16066)) ([4426249](https://github.com/n8n-io/n8n/commit/4426249950c465d273ffca893845a748a4d89d26))
* **editor:** Refresh NDV node connections if inputs change dynamically ([#16023](https://github.com/n8n-io/n8n/issues/16023)) ([02ed7b6](https://github.com/n8n-io/n8n/commit/02ed7b663184276a1aac96b3cd5b6fa54e554baa))
* **editor:** Send evaluation telemetry event to Posthog ([#16040](https://github.com/n8n-io/n8n/issues/16040)) ([d59b9b5](https://github.com/n8n-io/n8n/commit/d59b9b528ea547a2f1286796ff1a64f02f85686f))
* **editor:** Stop nefarious redirects during sign in ([#16034](https://github.com/n8n-io/n8n/issues/16034)) ([4865d1e](https://github.com/n8n-io/n8n/commit/4865d1e360a0fe7b045e295b5e1a29daad12314e))
* **editor:** Stop nefarious URL redirection in editor middleware ([#16047](https://github.com/n8n-io/n8n/issues/16047)) ([2178cfe](https://github.com/n8n-io/n8n/commit/2178cfe625373aec07c8a60f105e41ed399d7eaa))
* **Email Trigger (IMAP) Node:** Add Email UID also to email format "resolved" ([#15539](https://github.com/n8n-io/n8n/issues/15539)) ([33f8fab](https://github.com/n8n-io/n8n/commit/33f8fab7914d6dba476cc52c9373e4f7a53bb404))
* **Google Sheets Node:** Improve error message when row_number is null or undefined  ([#14560](https://github.com/n8n-io/n8n/issues/14560)) ([47538e1](https://github.com/n8n-io/n8n/commit/47538e17ef8ca3959c40285669b16e300f7a075b))
* **Local File Trigger Node:** Fix ignored option on Mac os ([#15872](https://github.com/n8n-io/n8n/issues/15872)) ([aa40735](https://github.com/n8n-io/n8n/commit/aa407350bbf14e0b6a76ad386ab6f211a9e4a77b))
* Make sure modals are listed when using a free AI credits credential in the OpenAI node ([#16030](https://github.com/n8n-io/n8n/issues/16030)) ([7f7b44a](https://github.com/n8n-io/n8n/commit/7f7b44ae7c11742357d55e64ea44fbc0ae3f8f54))
* **Microsoft SQL Node:** Handle connection errors correctly with continueOnFail ([#15962](https://github.com/n8n-io/n8n/issues/15962)) ([4c9198d](https://github.com/n8n-io/n8n/commit/4c9198df3733657f2deb9c37885ffaa46eab372b))
* **RSS Read Node:** Fix issue where some feeds fail to load ([#16001](https://github.com/n8n-io/n8n/issues/16001)) ([18c355d](https://github.com/n8n-io/n8n/commit/18c355d85fe00cc9b5807b7aa28c031185c6f312))
* **Supabase Vector Store Node:** Upgrade supabase SDK to address CVE-2025-48370 ([#15934](https://github.com/n8n-io/n8n/issues/15934)) ([21141b4](https://github.com/n8n-io/n8n/commit/21141b441f3d68eaa891e31db1a6335a062af1c6))
* Update NPM to address security vulnerability ([#15968](https://github.com/n8n-io/n8n/issues/15968)) ([2e18e07](https://github.com/n8n-io/n8n/commit/2e18e0707024b70d3cdf445ddb41277c195535b7))


### Features

* Add Cohere reranking capability to vector stores  ([#16014](https://github.com/n8n-io/n8n/issues/16014)) ([8a1cabe](https://github.com/n8n-io/n8n/commit/8a1cabe62ab988d338fb52ee3dcb41192ba3a6a7))
* Add custom CSS to response form for HITL nodes ([#15807](https://github.com/n8n-io/n8n/issues/15807)) ([3f48106](https://github.com/n8n-io/n8n/commit/3f4810615b54896e8e0900c7e68e68d819fb3b15))
* **core:** Add config to override default database ping interval and default idle connection timeout ([#15764](https://github.com/n8n-io/n8n/issues/15764)) ([ac06610](https://github.com/n8n-io/n8n/commit/ac0661048524dcf1e203506dd7ff963d0db74587))
* **core:** Add support for partial-match execution filters ([#15797](https://github.com/n8n-io/n8n/issues/15797)) ([1335af0](https://github.com/n8n-io/n8n/commit/1335af05d569d90fb51199bb4deb62abaefb99cc))
* **core:** Allow logging JSON to stdout ([#15766](https://github.com/n8n-io/n8n/issues/15766)) ([8abd556](https://github.com/n8n-io/n8n/commit/8abd5565970bb76e585ada0431c3e59081391e2b))
* **core:** Dynamic max page size limit for pagination dto ([#16100](https://github.com/n8n-io/n8n/issues/16100)) ([5c748ca](https://github.com/n8n-io/n8n/commit/5c748ca25d07aed8b9905b4a042917286fb06f17))
* **core:** Link 'Error Trigger' nodes to the parent execution that errored ([#16016](https://github.com/n8n-io/n8n/issues/16016)) ([d64f2e5](https://github.com/n8n-io/n8n/commit/d64f2e57f7ab2f93328e56b1e46fef5e4a14e221))
* **core:** Validate commit content for project admin role ([#15687](https://github.com/n8n-io/n8n/issues/15687)) ([9607908](https://github.com/n8n-io/n8n/commit/9607908c042a336bf9a1fb2b63b7e6e78a5c4243))
* **Default Data Loader Node:** Add default text splitter ([#15786](https://github.com/n8n-io/n8n/issues/15786)) ([40850c9](https://github.com/n8n-io/n8n/commit/40850c95b680a54f16fe8133ff7b801008879df2))
* **Default Data Loader Node:** Minor copy changes ([#16053](https://github.com/n8n-io/n8n/issues/16053)) ([4a6bcff](https://github.com/n8n-io/n8n/commit/4a6bcffc7069afd8d137fd90c563dbe5999597ec))
* **editor:** Add "Change owner" option to editor ([#15792](https://github.com/n8n-io/n8n/issues/15792)) ([5bc4e5d](https://github.com/n8n-io/n8n/commit/5bc4e5d846519080c8a3be5c662b046559433ab5))
* **editor:** Change default node names depending on node operation and resource ([#15954](https://github.com/n8n-io/n8n/issues/15954)) ([c92701c](https://github.com/n8n-io/n8n/commit/c92701cbdff41bd951b1b2ef55e4991876da5045))
* **editor:** Enable source environment push button for project admins ([#15527](https://github.com/n8n-io/n8n/issues/15527)) ([2f64809](https://github.com/n8n-io/n8n/commit/2f648098fd1687c8d4ac00341ff54bb1a92deeb9))
* **editor:** Improve UI for highlighted data, tags and rating in executions ([#15926](https://github.com/n8n-io/n8n/issues/15926)) ([9abb333](https://github.com/n8n-io/n8n/commit/9abb333507453e4671cd886db9f674b1957d7d5c))
* **editor:** Make ‘Execute workflow’ a split button ([#15933](https://github.com/n8n-io/n8n/issues/15933)) ([ac1a1df](https://github.com/n8n-io/n8n/commit/ac1a1dfbc208782c032527a2ed57975c80d7274b))
* **editor:** Rename debugging tab to fromai ([#16017](https://github.com/n8n-io/n8n/issues/16017)) ([bc44baa](https://github.com/n8n-io/n8n/commit/bc44baa7366b38235ca52e453b0e5538c2d2a688))
* **editor:** Use node name as tool name at Vector Store retriever tool nodes ([#15917](https://github.com/n8n-io/n8n/issues/15917)) ([a9f8b2d](https://github.com/n8n-io/n8n/commit/a9f8b2d46a2fc03633a2a6b8ca431a91e8e0cfce))
* **n8n Node:** Add missing filters ([#15437](https://github.com/n8n-io/n8n/issues/15437)) ([b07c52e](https://github.com/n8n-io/n8n/commit/b07c52e5777f114fc54c4bb0a280d94d06dd6a43))
* **OpenAI Chat Model Node:** Update default model to gpt-4.1-mini ([#15975](https://github.com/n8n-io/n8n/issues/15975)) ([0bea193](https://github.com/n8n-io/n8n/commit/0bea1938141e33e851838375ee5038f0c2862b00))
* **Structured Output Parser Node:** Add auto-fix support to Strucutred Output Parser ([#15915](https://github.com/n8n-io/n8n/issues/15915)) ([4f07ac3](https://github.com/n8n-io/n8n/commit/4f07ac394b99e99469c5cca5558e950a08d9e171))
* **Structured Output Parser Node:** Add notice about $refs support in JSON schema ([#15973](https://github.com/n8n-io/n8n/issues/15973)) ([47ad74d](https://github.com/n8n-io/n8n/commit/47ad74d1375e8c2603733187fceed151a4b7a8a8))
* **Structured Output Parser Node:** Mark all parameters as required for schemas generated from JSON example ([#15935](https://github.com/n8n-io/n8n/issues/15935)) ([7711e4b](https://github.com/n8n-io/n8n/commit/7711e4b052a5a452eff79dc9af3a93adb3fdae1c))
* **Vector Store Retriever Node:** Add reranker support to retriever for QA chain ([#16051](https://github.com/n8n-io/n8n/issues/16051)) ([969552a](https://github.com/n8n-io/n8n/commit/969552aeae96ca6c27537b32c1618f91c2c1075a))


### Performance Improvements

* **core:** Load source control only if licensed ([#15908](https://github.com/n8n-io/n8n/issues/15908)) ([d7e94eb](https://github.com/n8n-io/n8n/commit/d7e94eb46c4482e7f0053ec5db2de7e1ad011a6e))
* **core:** Populate cache only with static webhooks ([#16048](https://github.com/n8n-io/n8n/issues/16048)) ([a18822a](https://github.com/n8n-io/n8n/commit/a18822af0ee974bba783ca3c4b0def65fde04b15))



# [1.97.0](https://github.com/n8n-io/n8n/compare/n8n@1.96.0...n8n@1.97.0) (2025-06-02)


### Bug Fixes

* **core:** Allow dotfiles in sendFile to fix WorkFlow settings 404 error ([#14744](https://github.com/n8n-io/n8n/issues/14744)) ([7928a9b](https://github.com/n8n-io/n8n/commit/7928a9b3c26e676dd77e24aae98054e1ecbbb37b))
* **core:** Honor absolute paths for `N8N_LOG_FILE_LOCATION` ([#15873](https://github.com/n8n-io/n8n/issues/15873)) ([1e5b905](https://github.com/n8n-io/n8n/commit/1e5b90571d380bb674071d988147d3e854728e41))
* **core:** Normalize trailing slash when setting CORS headers for test webhooks ([#15906](https://github.com/n8n-io/n8n/issues/15906)) ([61d0c6a](https://github.com/n8n-io/n8n/commit/61d0c6a6e7f1ad5dd1795a0e1f910425d6e2fc8f))


### Performance Improvements

* **core:** Lazyload LDAP during bootup ([#15907](https://github.com/n8n-io/n8n/issues/15907)) ([31b6f32](https://github.com/n8n-io/n8n/commit/31b6f32a363da2b199eff135f4f1fbe227ef47c6))



# [1.96.0](https://github.com/n8n-io/n8n/compare/n8n@1.95.0...n8n@1.96.0) (2025-06-02)


### Bug Fixes

* **API:** Allow `false` as a dependant value for public api json schema validation ([#15858](https://github.com/n8n-io/n8n/issues/15858)) ([5a8899c](https://github.com/n8n-io/n8n/commit/5a8899c4c980cbb6276c96199e20cc160c775038))
* Check if form trigger URL is live before oppening pop-up ([#15800](https://github.com/n8n-io/n8n/issues/15800)) ([041ada1](https://github.com/n8n-io/n8n/commit/041ada1fd6b15fc43ceb78a52e9a4b8bb05344d8))
* **core:** Don't allow creating more projects than allowed by exploiting a race condition ([#15218](https://github.com/n8n-io/n8n/issues/15218)) ([6466e76](https://github.com/n8n-io/n8n/commit/6466e76c06723d181e984d2c185c67eafea68f8a))
* **core:** Fix sorting of executions not working on postgres and mysql ([#15423](https://github.com/n8n-io/n8n/issues/15423)) ([eca282d](https://github.com/n8n-io/n8n/commit/eca282d09c1641eaa2937acbab40249752d6bb38))
* **core:** Fix timezone-dependent test failures in Insights weekly compaction ([#15680](https://github.com/n8n-io/n8n/issues/15680)) ([096806a](https://github.com/n8n-io/n8n/commit/096806af154dfb3be8c4724cb054beba4b777792))
* **core:** Simplify Websocket origin security checks ([#15761](https://github.com/n8n-io/n8n/issues/15761)) ([bbe2b12](https://github.com/n8n-io/n8n/commit/bbe2b12bf2cca1a73e332ace349279f214f1f236))
* **core:** Solve memory leak in `TaskRequester` ([#15768](https://github.com/n8n-io/n8n/issues/15768)) ([0398505](https://github.com/n8n-io/n8n/commit/039850514387d4966845e6646e2a3e1562a0fc6d))
* **core:** Support `helpers.request` in task runners ([#15859](https://github.com/n8n-io/n8n/issues/15859)) ([7f8b943](https://github.com/n8n-io/n8n/commit/7f8b943c1ae805807134205eae8ebb24cef5511e))
* **editor:** Deactivate workflow on save if trigger is missing ([#15642](https://github.com/n8n-io/n8n/issues/15642)) ([3ba6419](https://github.com/n8n-io/n8n/commit/3ba6419710887456a4a6ecc04146721ffce4dcb5))
* **editor:** Delete all connections of nodes with multiple ones when removed from canvas ([#15713](https://github.com/n8n-io/n8n/issues/15713)) ([c4ea757](https://github.com/n8n-io/n8n/commit/c4ea7578fe3dddc8d480f3abb8cb5f2d064120c0))
* **editor:** Fix Execute workflow button hover state  ([#15518](https://github.com/n8n-io/n8n/issues/15518)) ([57d7b5e](https://github.com/n8n-io/n8n/commit/57d7b5e35edac78caffd27e29108272f0e995969))
* **editor:** Handle Insights calculations to prevent Infinity numbers ([#15727](https://github.com/n8n-io/n8n/issues/15727)) ([d1a39d9](https://github.com/n8n-io/n8n/commit/d1a39d96bbac78bb5b305e3760a2030311f6d732))
* **editor:** Move focus to search input in RLC ([#15741](https://github.com/n8n-io/n8n/issues/15741)) ([fee10da](https://github.com/n8n-io/n8n/commit/fee10da95b9444931915146f50a614411d8350bb))
* **editor:** Set deterministic width for sidebar ([#15753](https://github.com/n8n-io/n8n/issues/15753)) ([3f9a271](https://github.com/n8n-io/n8n/commit/3f9a271e69c0ab6ec1a4f35f57e736e566877adb))
* **editor:** Simplifying empty project deletion ([#15834](https://github.com/n8n-io/n8n/issues/15834)) ([6bf2d8a](https://github.com/n8n-io/n8n/commit/6bf2d8a4d4a62c3a20129a5e79bf18efa6de80ca))
* **editor:** Update copy for debug modal paywall ([#15905](https://github.com/n8n-io/n8n/issues/15905)) ([d0ff662](https://github.com/n8n-io/n8n/commit/d0ff66226fdd5af0bab2286360da397367b653a2))
* **editor:** Use last task data for calculating the current state ([#15546](https://github.com/n8n-io/n8n/issues/15546)) ([1daf0ff](https://github.com/n8n-io/n8n/commit/1daf0ff169468c9afde1ab3f37b241426cfd1db3))
* **GitHub Node:** Update auth urls for enterprise server ([#15533](https://github.com/n8n-io/n8n/issues/15533)) ([bc66d9f](https://github.com/n8n-io/n8n/commit/bc66d9fb7d757c308fe10b85c1b43913d3cc738a))
* **Jina AI Node:** Default value for "Output format" option ([#15683](https://github.com/n8n-io/n8n/issues/15683)) ([e125854](https://github.com/n8n-io/n8n/commit/e1258547ad7b0fe50bd5001b52eea0042eb5c4d5))
* **Microsoft SharePoint Node:** Add back the support for cred only node ([#15806](https://github.com/n8n-io/n8n/issues/15806)) ([0fdeba5](https://github.com/n8n-io/n8n/commit/0fdeba52bb171111d311f6d8bbb1b348ad08ebc9))
* **n8n Form Node:** Use execution.mode instead of hard coding webhook ([#15647](https://github.com/n8n-io/n8n/issues/15647)) ([636e9f4](https://github.com/n8n-io/n8n/commit/636e9f463fd7ee600e529649e31fdbbfc30234e2))
* Run evaluations loop manually always from first row ([#15794](https://github.com/n8n-io/n8n/issues/15794)) ([b8ab4b6](https://github.com/n8n-io/n8n/commit/b8ab4b6a5e1adfb9b582d0186b5238b487b5ce5b))
* Skip subworkflow input test temporarily ([#15803](https://github.com/n8n-io/n8n/issues/15803)) ([ba70cab](https://github.com/n8n-io/n8n/commit/ba70cab9d508405e0c24ac29ad4ea5d585b5482a))


### Features

* **API:** Add user management endpoints to the Projects Public API ([#12329](https://github.com/n8n-io/n8n/issues/12329)) ([4459c7e](https://github.com/n8n-io/n8n/commit/4459c7e7b10e7e1cd30a8885dd03ad452f846b96))
* **core:** Allow specifying Content-Security-Policy-Report-Only ([#15805](https://github.com/n8n-io/n8n/issues/15805)) ([c127846](https://github.com/n8n-io/n8n/commit/c12784600fb5acd42fcce10c72f73168d3d2948d))
* **core:** Start listening to IPv6 addresses as well by default ([#15810](https://github.com/n8n-io/n8n/issues/15810)) ([9f44f40](https://github.com/n8n-io/n8n/commit/9f44f407459cb656a697a8d44a129d1d4cbbbc17))
* **editor:** Add ability to extract sub-workflows to canvas context menu ([#15538](https://github.com/n8n-io/n8n/issues/15538)) ([5985df6](https://github.com/n8n-io/n8n/commit/5985df6e5166e59e77193cba49607a7d3110deac))
* **editor:** Combine 'Move to Folder' and 'Change owner' modals ([#15756](https://github.com/n8n-io/n8n/issues/15756)) ([e860dd6](https://github.com/n8n-io/n8n/commit/e860dd6d2eb6a2dac5126bc60006d53b53115a68))
* **editor:** Support pasting an expression into a number parameter ([#15722](https://github.com/n8n-io/n8n/issues/15722)) ([2a1475d](https://github.com/n8n-io/n8n/commit/2a1475d67125d111b0f2ed602e597fae83d65b56))
* **MCP Server Trigger Node:** Cleanup MCP server management, use sanitized trigger node's name as name for the MCP server ([#15751](https://github.com/n8n-io/n8n/issues/15751)) ([07a636e](https://github.com/n8n-io/n8n/commit/07a636eed6cb4d1f487018b34632810d24d99824))
* **Perplexity Node:** New node  ([#13604](https://github.com/n8n-io/n8n/issues/13604)) ([6d3e6ee](https://github.com/n8n-io/n8n/commit/6d3e6eef00ed3acf35d376b88ce6586692ae641b))
* **Respond to Webhook Node:** Setting to configure outputs  ([#15619](https://github.com/n8n-io/n8n/issues/15619)) ([be5f14e](https://github.com/n8n-io/n8n/commit/be5f14e31623174b66ef3062aa8f780970c5689f))


### Performance Improvements

* **core:** Shorten bootup for all instance types ([#15856](https://github.com/n8n-io/n8n/issues/15856)) ([73c9a52](https://github.com/n8n-io/n8n/commit/73c9a529dd5ee8f5e461edfe815a88bb97d86275))



# [1.95.0](https://github.com/n8n-io/n8n/compare/n8n@1.94.0...n8n@1.95.0) (2025-05-26)


### Bug Fixes

* **Chat Trigger Node:** Don't continue when action is load previous session and option is not set ([#15438](https://github.com/n8n-io/n8n/issues/15438)) ([8fd0738](https://github.com/n8n-io/n8n/commit/8fd0738191f87f5762f23c763f64e86fdd444830))
* **core:** Add support for proxy using forward headers ([#15006](https://github.com/n8n-io/n8n/issues/15006)) ([b1687c6](https://github.com/n8n-io/n8n/commit/b1687c6be2cbeda0989505f67be3c2a64489c5d0))
* **core:** Fix community package installation on windows ([#15685](https://github.com/n8n-io/n8n/issues/15685)) ([647cb85](https://github.com/n8n-io/n8n/commit/647cb851e5e7f7b206bede8ac858f6c506b7a8c7))
* **core:** Fix license reloading flow in scaling mode ([#15650](https://github.com/n8n-io/n8n/issues/15650)) ([c2449ee](https://github.com/n8n-io/n8n/commit/c2449ee2c8fec784e16620eebf936ce008598765))
* **core:** Use destination node to select the correct pinned trigger to start from ([#15633](https://github.com/n8n-io/n8n/issues/15633)) ([dc0802b](https://github.com/n8n-io/n8n/commit/dc0802bbd1034812a7061d0610acb62986e1f3bf))
* **editor:** Add type definition for $getWorkflowStaticData to code node ([#15544](https://github.com/n8n-io/n8n/issues/15544)) ([bca03ca](https://github.com/n8n-io/n8n/commit/bca03ca7392b00ce2edd7d829bc23b6d999a0e37))
* **editor:** Don't mark node as dirty when NDV is opened ([#15222](https://github.com/n8n-io/n8n/issues/15222)) ([8d1170e](https://github.com/n8n-io/n8n/commit/8d1170e3ddc179a6ac1e6efe584cbbce702e11ab))
* **editor:** Fix how deviation percentage is calculated in Insights summary ([#15526](https://github.com/n8n-io/n8n/issues/15526)) ([26de979](https://github.com/n8n-io/n8n/commit/26de97976aed4d5f11f7e37ca55fc5c1fe283099))
* **editor:** Fix notification toast offset outside of NodeView if chat/logs were opened ([#15622](https://github.com/n8n-io/n8n/issues/15622)) ([70ea7a8](https://github.com/n8n-io/n8n/commit/70ea7a88594026479a934341b5c149661e75973b))
* **editor:** Fix schema view showing incorrect data on loop node done branch ([#15635](https://github.com/n8n-io/n8n/issues/15635)) ([f762c59](https://github.com/n8n-io/n8n/commit/f762c59fb353dd334e4239b545ae44503b6e78d4))
* **editor:** Fix update panel icon display. Fix title on insights dashboard ([#15593](https://github.com/n8n-io/n8n/issues/15593)) ([075b035](https://github.com/n8n-io/n8n/commit/075b035d64d462e84e35c2e3b73afee0fca592b8))
* **editor:** Handle Loop node execution data preview correctly when inserting a node  ([#15351](https://github.com/n8n-io/n8n/issues/15351)) ([5967c13](https://github.com/n8n-io/n8n/commit/5967c131654d5d8e87633fba9181af5ed571539b))
* **editor:** Make deleting Call n8n Workflow Tool fromAI workflow input descriptions work ([#15459](https://github.com/n8n-io/n8n/issues/15459)) ([0e708dd](https://github.com/n8n-io/n8n/commit/0e708ddb54a2487ce48776b6470a7bc71998b845))
* Fix jobs for secrets inherit ([#15532](https://github.com/n8n-io/n8n/issues/15532)) ([cf29b5f](https://github.com/n8n-io/n8n/commit/cf29b5f188c83f02ea3d1f8cb9a064dfebaca3eb))
* **Google Drive Node:** Incorrect MIME type when uploading files on cloud ([#15478](https://github.com/n8n-io/n8n/issues/15478)) ([2060498](https://github.com/n8n-io/n8n/commit/20604983cd007fc041da6b9dd084264c8977bb68))
* **HTTP Request Node:** Fix prototype pollution vulnerability ([#15463](https://github.com/n8n-io/n8n/issues/15463)) ([1ffc33d](https://github.com/n8n-io/n8n/commit/1ffc33dcc63dfcc0dc27905a9c0a01de33da4160))
* **Information Extractor Node:** Improve error handling for empty inputs ([#15590](https://github.com/n8n-io/n8n/issues/15590)) ([bb2f675](https://github.com/n8n-io/n8n/commit/bb2f675817ccfc2e11ce9b758c4f9dd80a992cd5))
* **Jira Software Node:** Use old endpoints to get all issues on self-hosted instances ([#15591](https://github.com/n8n-io/n8n/issues/15591)) ([e23ffcc](https://github.com/n8n-io/n8n/commit/e23ffccca8248aa76435be9d20cc3df6bd6c3773))
* **MongoDB Node:** Stop overwriting nested values on update ([#15543](https://github.com/n8n-io/n8n/issues/15543)) ([3ee15a8](https://github.com/n8n-io/n8n/commit/3ee15a833128cac63a767f13aaaaad7ebd960501))
* **Summarize Node:** Convert v1 split by values to string ([#15525](https://github.com/n8n-io/n8n/issues/15525)) ([4d037ca](https://github.com/n8n-io/n8n/commit/4d037ca68abe4660b3815da3b99e8b65e2b80c43))
* **Telegram Node:** Include error message in output when continueOnFail is set ([#15540](https://github.com/n8n-io/n8n/issues/15540)) ([b8ee275](https://github.com/n8n-io/n8n/commit/b8ee275f0beeaf054cd0ef52e987c73bc211ec27))


### Features

* **Airtop Node:** Add File operations and scroll micro-interaction ([#15089](https://github.com/n8n-io/n8n/issues/15089)) ([86885a7](https://github.com/n8n-io/n8n/commit/86885a7d0e035a480960600a20303ebcda508870))
* **Anthropic Chat Model Node:** Set the new Claude 4 Sonnet model to be the default ([#15609](https://github.com/n8n-io/n8n/issues/15609)) ([cf8b611](https://github.com/n8n-io/n8n/commit/cf8b611d14528b3a898a1b89d6c817a0b7e63575))
* **core:** Add logs for insights flushing and compaction ([#15519](https://github.com/n8n-io/n8n/issues/15519)) ([3743a8c](https://github.com/n8n-io/n8n/commit/3743a8c33dfc77295e743bf8606e45850be21579))
* **core:** Invalidate all sessions when MFA is enabled/disabled ([#15524](https://github.com/n8n-io/n8n/issues/15524)) ([2a35c19](https://github.com/n8n-io/n8n/commit/2a35c19ef971bd9a2612a43471e6f87dd4c43f7b))
* **core:** Scope getStatus for environments for project admin role ([#15404](https://github.com/n8n-io/n8n/issues/15404)) ([f9f9597](https://github.com/n8n-io/n8n/commit/f9f9597bbd20a8a97c0100f20586e9c1a8acd4d9))
* **editor:** "Executing" state in the output panel ([#15470](https://github.com/n8n-io/n8n/issues/15470)) ([7e3bcd3](https://github.com/n8n-io/n8n/commit/7e3bcd389546a8b85a9a81e0ce76f5aeb4df3e7c))
* **editor:** Add an option to sync canvas with log view ([#15391](https://github.com/n8n-io/n8n/issues/15391)) ([9938e63](https://github.com/n8n-io/n8n/commit/9938e63a666cb37461ce642836c427f05a44ebc9))
* **editor:** Distinguish official verified nodes from community built nodes ([#15630](https://github.com/n8n-io/n8n/issues/15630)) ([7f0c6d6](https://github.com/n8n-io/n8n/commit/7f0c6d62e6a1b9a1b2fc92ad05d4c47d3a9393d6))
* **editor:** Save new project on Enter in name field ([#15535](https://github.com/n8n-io/n8n/issues/15535)) ([fbf7083](https://github.com/n8n-io/n8n/commit/fbf7083062488d1b7e2e69b8ed7f5bcded417baf))
* **editor:** Show informative message in NDV when AI tools have no parameters ([#15515](https://github.com/n8n-io/n8n/issues/15515)) ([a426ecd](https://github.com/n8n-io/n8n/commit/a426ecd2f13208ac80ddcbabbc8ac8fdbd268ab0))
* **editor:** Use resource locator at Simple Vector Store memory key, allow cross workflow use ([#15421](https://github.com/n8n-io/n8n/issues/15421)) ([e5c2aea](https://github.com/n8n-io/n8n/commit/e5c2aea6fe770698c0f8d6986b6b4662e89f90b4))
* **Merge Node:** Option in combineBySql operation to return either confirmation of succes or empty result ([#15509](https://github.com/n8n-io/n8n/issues/15509)) ([a86bc43](https://github.com/n8n-io/n8n/commit/a86bc43f50185f0aa647a63dfe04d147fad62256))
* Migrate Test Workflows to Main Repo ([#15504](https://github.com/n8n-io/n8n/issues/15504)) ([867842d](https://github.com/n8n-io/n8n/commit/867842d4735a73ce117ae418ea49db4f1f567c94))



# [1.94.0](https://github.com/n8n-io/n8n/compare/n8n@1.93.0...n8n@1.94.0) (2025-05-19)


### Bug Fixes

* **AI Agent Node:** Fix tool calling when tools run in a loop ([#15250](https://github.com/n8n-io/n8n/issues/15250)) ([cd1d6c9](https://github.com/n8n-io/n8n/commit/cd1d6c9dfc5491a10b4c522b664949b46c58ea45))
* **Azure OpenAI Chat Model Node:** Simplify Azure Entra ID Authentication and Auto-Refresh token ([#15335](https://github.com/n8n-io/n8n/issues/15335)) ([e750d53](https://github.com/n8n-io/n8n/commit/e750d5366ec51b09278ed75f2c07bf9946488645))
* **Basic LLM Chain Node:** Use JSON parsing for Claude 3.7 with thinking enabled ([#15381](https://github.com/n8n-io/n8n/issues/15381)) ([c8b9a7f](https://github.com/n8n-io/n8n/commit/c8b9a7fdebc902b6d68ed1356e79ee976ab1cee7))
* **core:** Allow strings starting with numbers in alphanumeric string validator ([#15425](https://github.com/n8n-io/n8n/issues/15425)) ([64b3fa3](https://github.com/n8n-io/n8n/commit/64b3fa3d1771a69d62814977d3ac3782a35aeb35))
* **core:** Load config early to fix `N8N_CONFIG_FILES` ([#15406](https://github.com/n8n-io/n8n/issues/15406)) ([ec63a61](https://github.com/n8n-io/n8n/commit/ec63a616523221ec2216782845e508a59c6d0a05))
* **core:** Load insights module on webhook instance to save insights on webhook workflows ([#15433](https://github.com/n8n-io/n8n/issues/15433)) ([bf5551d](https://github.com/n8n-io/n8n/commit/bf5551d711bb15af3ac104046219abb4686ef1c1))
* **core:** Make the Insights by time datetime parsing more robust ([#15413](https://github.com/n8n-io/n8n/issues/15413)) ([d9fdef3](https://github.com/n8n-io/n8n/commit/d9fdef3bf9ca2f0bca564493cbae851b7a97bd8e))
* **core:** Upgrade formidable to address CVE-2025-46653 ([#15341](https://github.com/n8n-io/n8n/issues/15341)) ([d612d7b](https://github.com/n8n-io/n8n/commit/d612d7ba32d2cea093a6ebf149b93c5e9a4bcbe6))
* **core:** Upgrade snowflake-sdk to address CVE-2025-46328 ([#15345](https://github.com/n8n-io/n8n/issues/15345)) ([eb634ea](https://github.com/n8n-io/n8n/commit/eb634eacf4b82f00cc44f4328150e9a0d22b791f))
* **editor:** Correctly show Workflow Breadcrumbs in MainHeader on Registered Community ([#15457](https://github.com/n8n-io/n8n/issues/15457)) ([5c38405](https://github.com/n8n-io/n8n/commit/5c3840583dc8993e76fb9324aa4fe766aff60cb7))
* **editor:** Don't render `now` when `startedAt` is `null` ([#15283](https://github.com/n8n-io/n8n/issues/15283)) ([44ecad5](https://github.com/n8n-io/n8n/commit/44ecad58831cca5fd411b1f943a74910283b77c7))
* **editor:** FE fixes to insights ([#15228](https://github.com/n8n-io/n8n/issues/15228)) ([3eb1c1c](https://github.com/n8n-io/n8n/commit/3eb1c1c783a45a150fa7229d8f2590d3786f58ad))
* **editor:** Fix node renaming in pinned data ([#15482](https://github.com/n8n-io/n8n/issues/15482)) ([fc17cde](https://github.com/n8n-io/n8n/commit/fc17cdece2fdaf4ee31c77f38a2b4fc2416b762d))
* **editor:** Fix paired items after renaming a node ([#15440](https://github.com/n8n-io/n8n/issues/15440)) ([7d3cae5](https://github.com/n8n-io/n8n/commit/7d3cae5639b26b32d170e516b72dbe782e25f4bb))
* **editor:** Fix partial chat executions ([#15379](https://github.com/n8n-io/n8n/issues/15379)) ([b6370fb](https://github.com/n8n-io/n8n/commit/b6370fb2ec97e4533ec24f712019227f7f47b253))
* **editor:** Fix resizing NDV output panel when closing assistant ([#15313](https://github.com/n8n-io/n8n/issues/15313)) ([d7d3d33](https://github.com/n8n-io/n8n/commit/d7d3d33d1a072372a7930290eb060371e0b466e8))
* **editor:** Fix switching between connected SQL/HTML editors ([#15297](https://github.com/n8n-io/n8n/issues/15297)) ([bb2cfc2](https://github.com/n8n-io/n8n/commit/bb2cfc209c96cc4ed3335ecff878d5d40346a8da))
* **editor:** Hide evaluation trigger ([#15471](https://github.com/n8n-io/n8n/issues/15471)) ([b53bd17](https://github.com/n8n-io/n8n/commit/b53bd173d0a26b0662053e8c95505cbab3dc6963))
* **editor:** Make `AI Agent` appear before `Magento 2` when typing `agent` ([#15302](https://github.com/n8n-io/n8n/issues/15302)) ([d683a54](https://github.com/n8n-io/n8n/commit/d683a54da0e1f43cb9ef9bdb54ba49551839a640))
* **editor:** Normalize credential data from source control ([#15434](https://github.com/n8n-io/n8n/issues/15434)) ([840a3be](https://github.com/n8n-io/n8n/commit/840a3bee4bc41e4b94bd571ef2899e24c7fa7afe))
* **editor:** Show error toast for failed executions ([#15388](https://github.com/n8n-io/n8n/issues/15388)) ([e68149b](https://github.com/n8n-io/n8n/commit/e68149bbc7760b2c1f311803f51588fbb0704fbd))
* **editor:** Tag styling issues ([#15336](https://github.com/n8n-io/n8n/issues/15336)) ([807084e](https://github.com/n8n-io/n8n/commit/807084e75d63d76115448e1b21d29ec8c7fd3854))
* Ensure diagnostics stay disabled in e2e even when enabled by environment variable ([#15322](https://github.com/n8n-io/n8n/issues/15322)) ([c026962](https://github.com/n8n-io/n8n/commit/c02696241bcce356aa5ff774226e1fd223069ee0))
* **Execute Workflow Trigger Node:** Show helpful error message when passing array to JSON Example ([#15458](https://github.com/n8n-io/n8n/issues/15458)) ([06e9386](https://github.com/n8n-io/n8n/commit/06e938687584d4f3a57a444171396152b0491c59))
* **n8n Evaluation Trigger Node:** Fix tweaks ([#15473](https://github.com/n8n-io/n8n/issues/15473)) ([3985387](https://github.com/n8n-io/n8n/commit/398538720429c061d9df3374bffa711cc4d9aa20))
* **n8n Form Node:** Limit the max width for text area ([#15508](https://github.com/n8n-io/n8n/issues/15508)) ([9936186](https://github.com/n8n-io/n8n/commit/99361869a3e8eaf0c228bbc923d45e844f9f6ac5))
* **OpenAI Node:** Hide the option to return URL for gpt-image-1 model ([#15392](https://github.com/n8n-io/n8n/issues/15392)) ([027a479](https://github.com/n8n-io/n8n/commit/027a479172351b0af8b2e596eb4f3e9a76859437))
* **PostBin Node:** Update base URL for postbin node ([#15358](https://github.com/n8n-io/n8n/issues/15358)) ([0cddc95](https://github.com/n8n-io/n8n/commit/0cddc9576f6c77b6b5813fe6f3aa649df45c2ce9))
* **RabbitMQ Node:** Support RabbitMQ v.4.1.0 by updating amqplib ([#15418](https://github.com/n8n-io/n8n/issues/15418)) ([cf05c33](https://github.com/n8n-io/n8n/commit/cf05c3341ed81ab343c656ddbbcf14486add8f20))
* Set `tournament` for nodes test harness ([#15346](https://github.com/n8n-io/n8n/issues/15346)) ([0699925](https://github.com/n8n-io/n8n/commit/069992524d3a45b0f10183379cc0168c67f661fb))
* **Text Classifier Node:** Return error for empty inputText ([#15390](https://github.com/n8n-io/n8n/issues/15390)) ([71e5584](https://github.com/n8n-io/n8n/commit/71e5584d28771400b7d8478d9c519de65c35ee6f))
* **YouTube Node:** Chunk file content before uploading ([#15405](https://github.com/n8n-io/n8n/issues/15405)) ([3e855b4](https://github.com/n8n-io/n8n/commit/3e855b4485244549c1cbe46e7e23a73fa6292460))


### Features

* Add HTTP proxy for supported LLM nodes ([#15449](https://github.com/n8n-io/n8n/issues/15449)) ([907485d](https://github.com/n8n-io/n8n/commit/907485d01692f004ea289dcd2d6af2d0900e1b49))
* **API:** Add Public API endpoint for updating variables ([#15315](https://github.com/n8n-io/n8n/issues/15315)) ([52bf920](https://github.com/n8n-io/n8n/commit/52bf9203f009d7ffc586f87fdd642d431acdca8f))
* **AWS IAM Node:** Add new AWS IAM Node ([#11963](https://github.com/n8n-io/n8n/issues/11963)) ([ab1047e](https://github.com/n8n-io/n8n/commit/ab1047ebde4ce0bdbf9ef25cae1503ef147eb89e))
* **editor:** Add "Go to Sub-workflow" menu context action to `Workflow Tool` ([#15396](https://github.com/n8n-io/n8n/issues/15396)) ([2b05dbe](https://github.com/n8n-io/n8n/commit/2b05dbea8c416c1edd88801f711d4c4f6c43a4d7))
* **editor:** Add user info on relations to enhance design of project users list ([#15420](https://github.com/n8n-io/n8n/issues/15420)) ([435d43f](https://github.com/n8n-io/n8n/commit/435d43fc5b2307a966e44fc71d2e1ec71c0ce694))
* **editor:** Improve canvas node insertion position ([#14289](https://github.com/n8n-io/n8n/issues/14289)) ([102c676](https://github.com/n8n-io/n8n/commit/102c67628c67da19c54eeca8bfe1703616a016c9))
* **editor:** Improve manual description in nodes as tools ([#15373](https://github.com/n8n-io/n8n/issues/15373)) ([726438d](https://github.com/n8n-io/n8n/commit/726438d95ef3a58095b46bb17d2ce88209c5ceec))
* **editor:** Include pending users for project users search ([#15389](https://github.com/n8n-io/n8n/issues/15389)) ([f906dba](https://github.com/n8n-io/n8n/commit/f906dbaf6337764297de4fd7afaf96e1baebd4a5))
* **editor:** Keyboard shortcuts for the log view ([#15378](https://github.com/n8n-io/n8n/issues/15378)) ([1935e62](https://github.com/n8n-io/n8n/commit/1935e62adfba1cd2b3bea6122bd88fc01f9f5bb7))
* **editor:** Rollout improved log view (2nd attempt) ([#15382](https://github.com/n8n-io/n8n/issues/15382)) ([4657e34](https://github.com/n8n-io/n8n/commit/4657e348f4a262a14b8c4060ff2d9538222e13da))
* **editor:** Show sub workflow runs in the log view ([#15163](https://github.com/n8n-io/n8n/issues/15163)) ([0c4398f](https://github.com/n8n-io/n8n/commit/0c4398fd2f72ad473a38f925e99cc524c4ad2038))
* **Execute Workflow Trigger Node:** Reintroduce binary data on Workflow Triggers ([#15259](https://github.com/n8n-io/n8n/issues/15259)) ([218007e](https://github.com/n8n-io/n8n/commit/218007e625ca52256548fc3f5b01debb1f2bbfb3))
* **Microsoft SharePoint Node:** New node ([#13727](https://github.com/n8n-io/n8n/issues/13727)) ([954b662](https://github.com/n8n-io/n8n/commit/954b66218fa045c4784c29a2d3a805f51fea9924))
* **n8n Evaluation Trigger Node:** Add Evaluation Trigger and Evaluation Node ([#15194](https://github.com/n8n-io/n8n/issues/15194)) ([570d1e7](https://github.com/n8n-io/n8n/commit/570d1e7aadd5ba1d77ab95432bed0c9fcbe812a5))
* **n8n Evaluation Trigger Node:** Add link to dataset template in trigger ([#15455](https://github.com/n8n-io/n8n/issues/15455)) ([1f023db](https://github.com/n8n-io/n8n/commit/1f023db531ce019163e479c1c1340a0c0041b4b5))
* **n8n Evaluation Trigger Node:** Add telemetry events ([#15465](https://github.com/n8n-io/n8n/issues/15465)) ([9834a49](https://github.com/n8n-io/n8n/commit/9834a49bd344f74be0280afbf4a0ed03b5816708))
* **n8n Microsoft Teams Node:** New trigger node ([#12875](https://github.com/n8n-io/n8n/issues/12875)) ([870940b](https://github.com/n8n-io/n8n/commit/870940b54393ab4a836c6ca4325af4f97c16dfbd))
* Optimise langchain calls in batching mode ([#15243](https://github.com/n8n-io/n8n/issues/15243)) ([ff15693](https://github.com/n8n-io/n8n/commit/ff156930c5f1b75da59bc27b424925a5535cd908))
* **Respond to Webhook Node:** Additional output branch - Response ([#13734](https://github.com/n8n-io/n8n/issues/13734)) ([40fb4a2](https://github.com/n8n-io/n8n/commit/40fb4a2efc6201539d765358db536ca243cb140f))
* **Snowflake Node:** Add support for Key-Pair authentication ([#14833](https://github.com/n8n-io/n8n/issues/14833)) ([4302c5f](https://github.com/n8n-io/n8n/commit/4302c5f474e96412f7a1c5d724b1d1c05acc2068))


### Performance Improvements

* **editor:** Avoid deep watch on execution result data ([#15304](https://github.com/n8n-io/n8n/issues/15304)) ([cd2e2dc](https://github.com/n8n-io/n8n/commit/cd2e2dc8d93632479ff4a38600ddd76cdcd5c957))



# [1.93.0](https://github.com/n8n-io/n8n/compare/n8n@1.92.0...n8n@1.93.0) (2025-05-12)


### Bug Fixes

* Center circular element in Milvus logo ([#15078](https://github.com/n8n-io/n8n/issues/15078)) ([2202264](https://github.com/n8n-io/n8n/commit/22022642bf182b7f35a7446ef15465a201665bb0))
* **Code Node:** Update pyodide sandbox context to fix micropip regressions ([#15181](https://github.com/n8n-io/n8n/issues/15181)) ([63cbf86](https://github.com/n8n-io/n8n/commit/63cbf8681a85b2b4ac1bbf69bf13a91f0c40ea4a))
* Community nodes - setting page empty state ([#15305](https://github.com/n8n-io/n8n/issues/15305)) ([e7c095d](https://github.com/n8n-io/n8n/commit/e7c095d047759349ddb970537de2575b25d47ca1))
* **core:** Add mechanism to prevent concurrent compaction on Insights ([#14988](https://github.com/n8n-io/n8n/issues/14988)) ([392e914](https://github.com/n8n-io/n8n/commit/392e91480a8e1508faced838854d2215c3ae6139))
* **core:** Do not cache dynamic webhooks ([#15176](https://github.com/n8n-io/n8n/issues/15176)) ([0659ba9](https://github.com/n8n-io/n8n/commit/0659ba957cf741feabef32445a3a2f96c7e59006))
* **core:** Fix Insights concurrency issues for legacy sqlite ([#15028](https://github.com/n8n-io/n8n/issues/15028)) ([e34bca7](https://github.com/n8n-io/n8n/commit/e34bca779bdbae13477990e61a8cb088f65af40f))
* **core:** Fix task runner logging to browser console ([#15111](https://github.com/n8n-io/n8n/issues/15111)) ([e86edf5](https://github.com/n8n-io/n8n/commit/e86edf536f647b2c215bcf8f289c7127d975e7eb))
* **core:** Fix task runner validation error on array of arrays ([#15106](https://github.com/n8n-io/n8n/issues/15106)) ([75c1a4c](https://github.com/n8n-io/n8n/commit/75c1a4c5b3d7debfabdee83f4dd6b1d732aa0185))
* **core:** Prioritize workflow execution with existing execution data on worker ([#15165](https://github.com/n8n-io/n8n/issues/15165)) ([12b681f](https://github.com/n8n-io/n8n/commit/12b681fc41035619a9684df97dd4c676a365e54c))
* **core:** Support task runner in `execute` and `execute-batch` commands ([#15147](https://github.com/n8n-io/n8n/issues/15147)) ([985f554](https://github.com/n8n-io/n8n/commit/985f5545012d07622c9632e26aaeba1e39484b18))
* **editor:** Close Workflow URL Import Modal after import ([#15177](https://github.com/n8n-io/n8n/issues/15177)) ([d14fb4d](https://github.com/n8n-io/n8n/commit/d14fb4dde3123548c477803e5da066544ed0ecb2))
* **editor:** Ensure no running node when execution finished ([#15299](https://github.com/n8n-io/n8n/issues/15299)) ([d12c7ee](https://github.com/n8n-io/n8n/commit/d12c7ee87f6d4087ed1d875dd72ca636f163b7a6))
* **editor:** Fix AI Node Logs View to Filter Duplicate Executions ([#15049](https://github.com/n8n-io/n8n/issues/15049)) ([8680797](https://github.com/n8n-io/n8n/commit/86807978c1c7a8f934b23132a99052f07313fef1))
* **editor:** Fix context menu behaviour and rename shortcut indicator ([#15116](https://github.com/n8n-io/n8n/issues/15116)) ([73a4a33](https://github.com/n8n-io/n8n/commit/73a4a33da0b36eb9fd40e9f3dc9a7f39fc1b892e))
* **editor:** Fix Paired item error message ([#15171](https://github.com/n8n-io/n8n/issues/15171)) ([be72f73](https://github.com/n8n-io/n8n/commit/be72f736ac6e3246ea52da92124be26585f0ac9e))
* **editor:** Fix sticky button disappearing on window resize ([#15105](https://github.com/n8n-io/n8n/issues/15105)) ([dcf3267](https://github.com/n8n-io/n8n/commit/dcf32679c3462f5dc3012667dfc2e2de3f96cd80))
* **editor:** Increase hover delay and hit area for canvas toolbar edge ([#15125](https://github.com/n8n-io/n8n/issues/15125)) ([cdcd059](https://github.com/n8n-io/n8n/commit/cdcd0592484e479e2b1aee140d912b22c055ad5e))
* **editor:** Issue with context menu disabling most options when importing template ([#15185](https://github.com/n8n-io/n8n/issues/15185)) ([abb8225](https://github.com/n8n-io/n8n/commit/abb822594453a594d306327817d435771779fad1))
* **editor:** Sort start start nodes for manual execution by Y position ([#15254](https://github.com/n8n-io/n8n/issues/15254)) ([ab27f91](https://github.com/n8n-io/n8n/commit/ab27f91944d6cb27e69f972e52f054a827290608))
* **Google Sheets Node:** Return single row in read operation if combine conditions is OR and 'Return only First Matching Row' ([#15095](https://github.com/n8n-io/n8n/issues/15095)) ([e0f5ba2](https://github.com/n8n-io/n8n/commit/e0f5ba2c67796883a8f284bc3de74caba89270b5))
* **Microsoft Entra ID Node:** Change Micosoft typo with Microsoft ([#14452](https://github.com/n8n-io/n8n/issues/14452)) ([af92117](https://github.com/n8n-io/n8n/commit/af92117e767cad160edfab141001e7f69ce0792d))
* Revert AI nodes batching ([#15129](https://github.com/n8n-io/n8n/issues/15129)) ([939ff97](https://github.com/n8n-io/n8n/commit/939ff97ec4248e610d560c9aea876ad43b147399))


### Features

* Community Nodes in the Nodes Panel ([#13923](https://github.com/n8n-io/n8n/issues/13923)) ([2463842](https://github.com/n8n-io/n8n/commit/24638420bd6183939dfd6ff7f008c225fedb49f9))
* **core:** Archive workflows when removing folders without transfer ([#15057](https://github.com/n8n-io/n8n/issues/15057)) ([403f08b](https://github.com/n8n-io/n8n/commit/403f08b6e36eecc45b734f4e6c594753c1a816b3))
* **core:** Change workflow deletions to soft deletes ([#14894](https://github.com/n8n-io/n8n/issues/14894)) ([3a13139](https://github.com/n8n-io/n8n/commit/3a13139f78891afd14cb585ca26e8f4c9847393d))
* **core:** Check license config for insights max retention ([#15256](https://github.com/n8n-io/n8n/issues/15256)) ([3be0555](https://github.com/n8n-io/n8n/commit/3be05556f9fe11c6b81f89bc94e3c09b7c838078))
* **core:** Implement Insights pruning system ([#14468](https://github.com/n8n-io/n8n/issues/14468)) ([ae27b48](https://github.com/n8n-io/n8n/commit/ae27b48ee7b5d3156b4ea1662826ad2a94c24263))
* **core:** Implement partial execution for all tool nodes ([#15168](https://github.com/n8n-io/n8n/issues/15168)) ([8b467e3](https://github.com/n8n-io/n8n/commit/8b467e3f569514787fc865789fd4bf2387051120))
* **core:** Improve nodeNameToToolName special characters normalization ([#15126](https://github.com/n8n-io/n8n/issues/15126)) ([07e6c7e](https://github.com/n8n-io/n8n/commit/07e6c7e13f1ddac9abaa484f7ee502cd049d49ef))
* **editor:** Allow jumping into sub-workflow with shortkey  ([#15200](https://github.com/n8n-io/n8n/issues/15200)) ([e2b9ada](https://github.com/n8n-io/n8n/commit/e2b9ada4b562426fbe8deeaefe657c1ed2b83362))
* **editor:** Implement 'Shared with you' section in the main navigation ([#15140](https://github.com/n8n-io/n8n/issues/15140)) ([1c65e82](https://github.com/n8n-io/n8n/commit/1c65e82b38b78da73a038e2e43743311c6a0ef12))
* **editor:** Preserve workflow list sort & page size preferences ([#15101](https://github.com/n8n-io/n8n/issues/15101)) ([cf03a28](https://github.com/n8n-io/n8n/commit/cf03a28774ebf495c0762ce4f7ea2a1922f569c4))
* **editor:** Rollout improved log view ([#15202](https://github.com/n8n-io/n8n/issues/15202)) ([8229b0b](https://github.com/n8n-io/n8n/commit/8229b0bcc20f6170d652a06789a9b586ba7a6315))
* **Jina AI Node:** Add Jina AI node ([#15094](https://github.com/n8n-io/n8n/issues/15094)) ([e9ef193](https://github.com/n8n-io/n8n/commit/e9ef193eaa52089da640c6d40f882dd42137efc5))
* **MCP Server Trigger Node:** Handle multiple tool calls in mcp server trigger ([#15064](https://github.com/n8n-io/n8n/issues/15064)) ([59ba162](https://github.com/n8n-io/n8n/commit/59ba162bd9fe9967d0b0733c3955d65256e062f5))
* **n8n AWS Cognito Node:** New node ([#11767](https://github.com/n8n-io/n8n/issues/11767)) ([f6e5efc](https://github.com/n8n-io/n8n/commit/f6e5efc2e0ae7b08d0b9f45948d78af06a9b2e6b))



# [1.92.0](https://github.com/n8n-io/n8n/compare/n8n@1.91.0...n8n@1.92.0) (2025-05-05)


### Bug Fixes

* **core:** Don't create additional `nodeExecuteBefore` message ([#14958](https://github.com/n8n-io/n8n/issues/14958)) ([a33e3a8](https://github.com/n8n-io/n8n/commit/a33e3a807a9dd4c2df6f44b1107c41b949dfe331))
* **core:** Error in partial execution of vector stores ([#15019](https://github.com/n8n-io/n8n/issues/15019)) ([5fa41bd](https://github.com/n8n-io/n8n/commit/5fa41bd73ae57fa0d957541643f0bf9c64a53d8f))
* **core:** Manual execution defaults to Manual trigger ([#15052](https://github.com/n8n-io/n8n/issues/15052)) ([c176063](https://github.com/n8n-io/n8n/commit/c1760631cf86942a8da19d0bf647d2eb70fc0477))
* **core:** Revert back to the extended query-parser on express 5 ([#15016](https://github.com/n8n-io/n8n/issues/15016)) ([9541b5b](https://github.com/n8n-io/n8n/commit/9541b5bb07de0e359159f5fcffbc48e5c6a08162))
* **core:** Use manual tool description if neither resources or operations exist  ([#15093](https://github.com/n8n-io/n8n/issues/15093)) ([1d4f639](https://github.com/n8n-io/n8n/commit/1d4f63985b6802fe0af6fe7862d4215611552d71))
* **editor:**  Close saving modal when workflow is new ([#14836](https://github.com/n8n-io/n8n/issues/14836)) ([48f0c91](https://github.com/n8n-io/n8n/commit/48f0c91a474dda995b5dbd89cdb51905b84ecbd9))
* **editor:** "Trigger node not found" error when chat message is entered ([#14954](https://github.com/n8n-io/n8n/issues/14954)) ([8981e22](https://github.com/n8n-io/n8n/commit/8981e22dd4df2c182fe4d845e7d0cc2677ff2d36))
* **editor:** Hide $fromAI button for exact type matches only ([#14996](https://github.com/n8n-io/n8n/issues/14996)) ([8613521](https://github.com/n8n-io/n8n/commit/8613521aabb95128d762076d15323bb1aa8e9deb))
* **editor:** Import form data with special characters from curl command correctly ([#14898](https://github.com/n8n-io/n8n/issues/14898)) ([3e43f9f](https://github.com/n8n-io/n8n/commit/3e43f9f8bc8542534a17f55e32634034c174a9d8))
* **editor:** Only prompt for MFA code when email is updated ([#15065](https://github.com/n8n-io/n8n/issues/15065)) ([aa4607e](https://github.com/n8n-io/n8n/commit/aa4607e7b5c15f8a6f69b3c900e656f317ebb784))
* **HTTP Request Node:** Add support for Bearer Auth in HttpRequest node ([#15043](https://github.com/n8n-io/n8n/issues/15043)) ([31003aa](https://github.com/n8n-io/n8n/commit/31003aacd15d7219fa87c919dedca7c8be09b1c2))
* **Summarize Node:** Fix spaces in Fields to Split By values converted to underscores ([#15020](https://github.com/n8n-io/n8n/issues/15020)) ([154153d](https://github.com/n8n-io/n8n/commit/154153d86f59552cffe33a1a746cbaf28fc8886f))


### Features

* **Anthropic Chat Model Node:** Add configurable base URL for Anthropic API ([#15063](https://github.com/n8n-io/n8n/issues/15063)) ([4b5f045](https://github.com/n8n-io/n8n/commit/4b5f045281837e7cc29a57a1b9360e87cc3805f7))
* **Azure OpenAI Chat Model Node:** Implement Azure Entra ID OAuth2 Authentication ([#15003](https://github.com/n8n-io/n8n/issues/15003)) ([cf00085](https://github.com/n8n-io/n8n/commit/cf0008500cafd94582720a1445d0468898e71184))
* **Calendly Trigger Node:** Deprecation notice for apiKey authentication ([#15048](https://github.com/n8n-io/n8n/issues/15048)) ([40d0702](https://github.com/n8n-io/n8n/commit/40d0702ed33ef7ffea303957b06e1e953023b559))
* **core:** Add production root executions ([#14845](https://github.com/n8n-io/n8n/issues/14845)) ([7f89244](https://github.com/n8n-io/n8n/commit/7f89244304855748bcd70f495914373369a89cbe))
* **editor:** Add "Rendered" display mode to the logs view ([#14994](https://github.com/n8n-io/n8n/issues/14994)) ([c0b5483](https://github.com/n8n-io/n8n/commit/c0b54832b3e7e7daafcc65c73c15a4cb90d3172a))
* **editor:** Support partial executions of tool nodes ([#14945](https://github.com/n8n-io/n8n/issues/14945)) ([54dcded](https://github.com/n8n-io/n8n/commit/54dcdedecedb0a480caa17f8d6f0447535a2995a))
* **Google Workspace Admin Node:** Google Admin Node Overhaul implementation ([#12271](https://github.com/n8n-io/n8n/issues/12271)) ([8a30c35](https://github.com/n8n-io/n8n/commit/8a30c35c33ad1175a3ee216c86a75ddd786d9887))
* **Jira Software Node:** Migrate from soon deprecated endpoints to get issues ([#14821](https://github.com/n8n-io/n8n/issues/14821)) ([216bdd1](https://github.com/n8n-io/n8n/commit/216bdd15fd94f9a427a86aaf0a9291e7d4df4056))
* Only show workflows shared with you in the overview page ([#14773](https://github.com/n8n-io/n8n/issues/14773)) ([eb46576](https://github.com/n8n-io/n8n/commit/eb465763cf31e1b24e0b2737e15cd1a0478658d9))
* Optimize langchain calls in batching mode ([#15011](https://github.com/n8n-io/n8n/issues/15011)) ([f3e29d2](https://github.com/n8n-io/n8n/commit/f3e29d25ed767d29aebed02a040f57a1cbc05f8d))



# [1.91.0](https://github.com/n8n-io/n8n/compare/n8n@1.90.0...n8n@1.91.0) (2025-04-28)


### Bug Fixes

* **AI Agent Node:** Prevent adding empty binary message ([#14871](https://github.com/n8n-io/n8n/issues/14871)) ([897338b](https://github.com/n8n-io/n8n/commit/897338bd245e33f26fe54bdd4659c8e3a58f1ff3))
* Bring back TidyUp button's icon and fix Easy AI button size ([#14818](https://github.com/n8n-io/n8n/issues/14818)) ([1e5c1fc](https://github.com/n8n-io/n8n/commit/1e5c1fceb70feeae2affdaa1256c018124da07a2))
* **Code Node:** Upgrade pyodide, sandbox it, and prevent JS sandbox escape ([#14356](https://github.com/n8n-io/n8n/issues/14356)) ([6c9c720](https://github.com/n8n-io/n8n/commit/6c9c720ae9496d5f1ea9817241fe257d6be5a10f))
* **core:** Disable insights for sqlite legacy ([#14824](https://github.com/n8n-io/n8n/issues/14824)) ([27f223d](https://github.com/n8n-io/n8n/commit/27f223d294f375a8f5af69557a5c2995e9004486))
* **core:** Error when multiple nodes return items with multiple paired items ([#14883](https://github.com/n8n-io/n8n/issues/14883)) ([ddb688b](https://github.com/n8n-io/n8n/commit/ddb688ba300b231e53a024a190cb7fc4bec3a9e7))
* **core:** Fix task runner's task timeout and heartbeat interval ([#14889](https://github.com/n8n-io/n8n/issues/14889)) ([cdf421e](https://github.com/n8n-io/n8n/commit/cdf421e80f6a8cca276a015e8cb8cb12660b8ee1))
* **core:** Handle infinite max history for insights date range ([#14794](https://github.com/n8n-io/n8n/issues/14794)) ([e83a64b](https://github.com/n8n-io/n8n/commit/e83a64b84a516181f62add011bb763840e5d8f20))
* **core:** Hide task runner warning if Code node is disabled ([#14801](https://github.com/n8n-io/n8n/issues/14801)) ([a217611](https://github.com/n8n-io/n8n/commit/a217611b2a146a0febbb6811e245ec60fb38494c))
* **core:** ID quoting in add scopes migration ([#14788](https://github.com/n8n-io/n8n/issues/14788)) ([f835c66](https://github.com/n8n-io/n8n/commit/f835c66d98abb1b93120e4d624498c40ba410d98))
* **Customer.io Node:** Allow EU customer.io domains in credential ([#14880](https://github.com/n8n-io/n8n/issues/14880)) ([0c7f7b3](https://github.com/n8n-io/n8n/commit/0c7f7b33cb45e39bec481cf731d5206ddd1486fa))
* **editor:** Changes to workflow after execution should not affect logs ([#14703](https://github.com/n8n-io/n8n/issues/14703)) ([84cee1d](https://github.com/n8n-io/n8n/commit/84cee1d12de19755154d415df117117225b7d941))
* **editor:** Data in input/output panel incorrectly mapped ([#14878](https://github.com/n8n-io/n8n/issues/14878)) ([0a2b740](https://github.com/n8n-io/n8n/commit/0a2b740063d4a78592e349ef75e61b3ef5fa9f61))
* **editor:** Fix insights summary banner empty state on time saved tab ([#14838](https://github.com/n8n-io/n8n/issues/14838)) ([2920381](https://github.com/n8n-io/n8n/commit/29203819031b80110259f15415caec9806e27c60))
* **editor:** Fix schema view bugs ([#14734](https://github.com/n8n-io/n8n/issues/14734)) ([022f475](https://github.com/n8n-io/n8n/commit/022f4755c2fe34a5ff446bfa7acb1e5324104740))
* **editor:** Handle if nodes are undefined/null in InputNodeSelect ([#14860](https://github.com/n8n-io/n8n/issues/14860)) ([67240ee](https://github.com/n8n-io/n8n/commit/67240ee069e55f09563f994c7c7729a1399c62db))
* **editor:** Ignore unconnected nodes when executing workflow ([#14683](https://github.com/n8n-io/n8n/issues/14683)) ([f743915](https://github.com/n8n-io/n8n/commit/f743915cc9940b2cc49a7cb617a84c8cb78a4070))
* **editor:** Only show previews if the param is an expression ([#14720](https://github.com/n8n-io/n8n/issues/14720)) ([db887b6](https://github.com/n8n-io/n8n/commit/db887b6f29ca627683c55b497f7410e435d47c3d))
* **editor:** Open NDV from logs view with correct run index ([#14779](https://github.com/n8n-io/n8n/issues/14779)) ([82b7be5](https://github.com/n8n-io/n8n/commit/82b7be5d2964ca7fc610aa7ff4f9b10c513fe2fc))
* **editor:** Place duplicated WFs always to correct parent folders ([#14713](https://github.com/n8n-io/n8n/issues/14713)) ([6c91e7e](https://github.com/n8n-io/n8n/commit/6c91e7e1b797e242afabe7e0ef4f9188b2d71cc6))
* **editor:** Show Transform Node in Panel only if available ([#14830](https://github.com/n8n-io/n8n/issues/14830)) ([92e2a8e](https://github.com/n8n-io/n8n/commit/92e2a8e61a4189025e5d4bac8be81576b624fe85))
* **editor:** Styling/UX improvements on the new logs view ([#14789](https://github.com/n8n-io/n8n/issues/14789)) ([454e5c7](https://github.com/n8n-io/n8n/commit/454e5c77ade0d412eb2de1719a58a07fffcc4649))
* **editor:** Use redirect url also with SSO login ([#14893](https://github.com/n8n-io/n8n/issues/14893)) ([6145790](https://github.com/n8n-io/n8n/commit/614579026dca75efbf1026a7017931f6971760b5))
* **Google Sheets Trigger Node:** Filter by first data row on `rowAdded` event  ([#14731](https://github.com/n8n-io/n8n/issues/14731)) ([1593fe3](https://github.com/n8n-io/n8n/commit/1593fe3de51b337d25fd35876202f71503006f8d))
* **Jira Software Node:** 403 when getting a list of items from Jira Cloud ([#14782](https://github.com/n8n-io/n8n/issues/14782)) ([1cbbcf4](https://github.com/n8n-io/n8n/commit/1cbbcf4a7726f38936a8fceeee8d635a212b0764))
* **n8n Form Node:** Use binary response from latest node in execution ([#14842](https://github.com/n8n-io/n8n/issues/14842)) ([9672a6d](https://github.com/n8n-io/n8n/commit/9672a6db0a3211ea27b658c9a2ab55053b1c3475))
* **n8n Split In Batches Node:** Rewrite hint for reset ([#14844](https://github.com/n8n-io/n8n/issues/14844)) ([9029f34](https://github.com/n8n-io/n8n/commit/9029f34bfdba79a5970b1ec680c3ebea11b6a7e4))
* **Text Classifier Node:** Validate inputText parameter ([#14832](https://github.com/n8n-io/n8n/issues/14832)) ([9021e19](https://github.com/n8n-io/n8n/commit/9021e195fa945ce92822d0afb0654808b2ff67b7))


### Features

* **core:** Add insights date ranges option to frontend settings ([#14792](https://github.com/n8n-io/n8n/issues/14792)) ([65d6b23](https://github.com/n8n-io/n8n/commit/65d6b2382df8d4382bcb9aac7e2e7d2192e457c0))
* **core:** Add InstanceRole auth support for AWS external secrets ([#14799](https://github.com/n8n-io/n8n/issues/14799)) ([8c4b9f7](https://github.com/n8n-io/n8n/commit/8c4b9f73f1bfc1d4e28ef0a38efe02627e15ac2f))
* **core:** Add InstanceRole auth support for binary-data object- storage backend ([#14800](https://github.com/n8n-io/n8n/issues/14800)) ([271024d](https://github.com/n8n-io/n8n/commit/271024ded0d55aa97daaf52cb8051abee36ad474))
* **core:** Allow setting folder destination when transferring workflow ownership ([#14935](https://github.com/n8n-io/n8n/issues/14935)) ([dbffcdc](https://github.com/n8n-io/n8n/commit/dbffcdc2ff4bf795995f53bc1a5166c4901b3320))
* **core:** Enable insights for sqlite legacy ([#14606](https://github.com/n8n-io/n8n/issues/14606)) ([88ed7be](https://github.com/n8n-io/n8n/commit/88ed7beff2bf3aaa00258dd06715d52ac129f1ca))
* **core:** Export new dto and schemas ([#14828](https://github.com/n8n-io/n8n/issues/14828)) ([9082adf](https://github.com/n8n-io/n8n/commit/9082adf89a821ab318d4767598275dac755b0918))
* **core:** Implement granularity and date range filtering on insights ([#14841](https://github.com/n8n-io/n8n/issues/14841)) ([28596a6](https://github.com/n8n-io/n8n/commit/28596a633ec336178409c0604dcfe69f13d2c869))
* **core:** Split insights service ([#14469](https://github.com/n8n-io/n8n/issues/14469)) ([eaf6783](https://github.com/n8n-io/n8n/commit/eaf6783eb54216aa3ba0f4d6871cc1d52095c5d7))
* **editor:** Add support for automatic expression switching to RLC ([#14735](https://github.com/n8n-io/n8n/issues/14735)) ([6b344f8](https://github.com/n8n-io/n8n/commit/6b344f8a7e74d6ac902457953cc1dcdfb2435da3))
* **editor:** Add time range selector to Insights ([#14877](https://github.com/n8n-io/n8n/issues/14877)) ([bfd85dd](https://github.com/n8n-io/n8n/commit/bfd85dd3c9afc02b427c16fa0241db5be1b3a6c4))
* **editor:** Include NodeDetailsView in URL ([#14349](https://github.com/n8n-io/n8n/issues/14349)) ([5ff073b](https://github.com/n8n-io/n8n/commit/5ff073bd7be80dcb857fd80f9637545e058397bb))
* **editor:** Show workflow breadcrumbs in canvas ([#14710](https://github.com/n8n-io/n8n/issues/14710)) ([46df8b4](https://github.com/n8n-io/n8n/commit/46df8b47d6ee2ad685a51c8b805ceeb230e4fe25))
* Group memory nodes into section in nodes panel ([#14826](https://github.com/n8n-io/n8n/issues/14826)) ([6197b0c](https://github.com/n8n-io/n8n/commit/6197b0cb6d668ac6b13e17c3765c7fa458cd0362))
* **OpenAI Node:** Filter available models by blacklisting rather than whitelisting ([#14780](https://github.com/n8n-io/n8n/issues/14780)) ([0e2eceb](https://github.com/n8n-io/n8n/commit/0e2eceb33f0a605173ba7e16fe9ac0b4cf8dcaa5))
* **OpenAI Node:** Support gpt-image-1 for image generation ([#14870](https://github.com/n8n-io/n8n/issues/14870)) ([11379bf](https://github.com/n8n-io/n8n/commit/11379bf656d50d30b8b1dfbeb03d9c64aaf8b26d))
* Prevent webhook url takeover ([#14783](https://github.com/n8n-io/n8n/issues/14783)) ([be53453](https://github.com/n8n-io/n8n/commit/be53453def4169a5598069218c8e58e6409d5a60))
* Refresh workflow name in workflows selector when updated ([#14705](https://github.com/n8n-io/n8n/issues/14705)) ([418a588](https://github.com/n8n-io/n8n/commit/418a588e8965c8b994051059a5ae8dbc2c87b860))


### Performance Improvements

* **editor:** Improve performance of the new logs view ([#14861](https://github.com/n8n-io/n8n/issues/14861)) ([40aadbf](https://github.com/n8n-io/n8n/commit/40aadbf880e525aedfbe8a89f0a2b78e298357bc))



# [1.90.0](https://github.com/n8n-io/n8n/compare/n8n@1.89.0...n8n@1.90.0) (2025-04-21)


### Bug Fixes

* AWS credential signing http request - convert form to body ([#14060](https://github.com/n8n-io/n8n/issues/14060)) ([652d0f5](https://github.com/n8n-io/n8n/commit/652d0f5428c1aecab25dcdb99487941310599a2a))
* **core:** Allow `$evaluateExpression` to resolve in task runners ([#14641](https://github.com/n8n-io/n8n/issues/14641)) ([7c1be05](https://github.com/n8n-io/n8n/commit/7c1be0584577621702e5ec39162881afee0cfd90))
* **core:** Fix missing encryption key check on workers ([#14603](https://github.com/n8n-io/n8n/issues/14603)) ([de03452](https://github.com/n8n-io/n8n/commit/de034526310639a4451f356b7a6ad0f01fb3fe51))
* **core:** Fix using secrets for credentials on oauth callback ([#14711](https://github.com/n8n-io/n8n/issues/14711)) ([09806c3](https://github.com/n8n-io/n8n/commit/09806c36ae0ae9f4b590999e83b90e9b42651eec))
* **core:** Handle task runner accept timeout error ([#14709](https://github.com/n8n-io/n8n/issues/14709)) ([a93dd53](https://github.com/n8n-io/n8n/commit/a93dd53a3b16118dbe7d5463d90f2406d0660134))
* **core:** Only check for folder changes when `parentFolderId` is present ([#14618](https://github.com/n8n-io/n8n/issues/14618)) ([08e73d3](https://github.com/n8n-io/n8n/commit/08e73d3aed5e706ebab9abb8895bbd9f5314c978))
* **core:** Prefer triggers with run data during partial executions ([#14691](https://github.com/n8n-io/n8n/issues/14691)) ([ddfe594](https://github.com/n8n-io/n8n/commit/ddfe594cf0486ed64d0ddc58e634ae6dbceb72e7))
* **core:** Propagate env to task runner ([#14638](https://github.com/n8n-io/n8n/issues/14638)) ([8e26d55](https://github.com/n8n-io/n8n/commit/8e26d5514d14e16e6f2777805dad372127b4a932))
* **core:** Reschedule Insights flushing after skipping for empty buffer ([#14637](https://github.com/n8n-io/n8n/issues/14637)) ([513f20a](https://github.com/n8n-io/n8n/commit/513f20a902c526ca8bd137f9c3189970e8b97243))
* **editor:** Account for `$evaluateExpression` in Codemirror ([#14643](https://github.com/n8n-io/n8n/issues/14643)) ([68a8761](https://github.com/n8n-io/n8n/commit/68a87619afa6ef1c0b1d4e9dcabe9fee9bb82321))
* **editor:** Allow long links on rendered markdown split to multiple lines ([#14635](https://github.com/n8n-io/n8n/issues/14635)) ([b80d753](https://github.com/n8n-io/n8n/commit/b80d7531d4cbc920950ff5445d821512dd5dd5ec))
* **editor:** Differentiate $fromAI overrides within lists ([#14696](https://github.com/n8n-io/n8n/issues/14696)) ([5aa6054](https://github.com/n8n-io/n8n/commit/5aa6054bc96fce1eb798d639d1a37ae2eff78455))
* **editor:** Fix expanding schema items with same names on NDV ([#14673](https://github.com/n8n-io/n8n/issues/14673)) ([ad386cd](https://github.com/n8n-io/n8n/commit/ad386cde31bf30084f49a8d0231ef49f50374fa7))
* **editor:** Fix Insights display time saved from minutes ([#14622](https://github.com/n8n-io/n8n/issues/14622)) ([6dd7756](https://github.com/n8n-io/n8n/commit/6dd7756191623e2d11f64d04ba21481505f923ad))
* **editor:** Fix same order of buttons in run data selector ([#14677](https://github.com/n8n-io/n8n/issues/14677)) ([74de403](https://github.com/n8n-io/n8n/commit/74de4037be7f46c9ce9f5fa844c8182f6f38ed16))
* **editor:** Fix updating of canvas node issue when credential is set-up ([#14633](https://github.com/n8n-io/n8n/issues/14633)) ([bc26923](https://github.com/n8n-io/n8n/commit/bc269234cf2b78f6887a272baa4563c482ed1597))
* **editor:** Highlight the suggested data type with bold in the Filter node ([#14707](https://github.com/n8n-io/n8n/issues/14707)) ([8325ca1](https://github.com/n8n-io/n8n/commit/8325ca1a4533ff8e5f79a19aafa89f9ed7d47e0d))
* **editor:** Improve handling of trailing 'Trigger' in NodeCreator search ([#14612](https://github.com/n8n-io/n8n/issues/14612)) ([8b3b474](https://github.com/n8n-io/n8n/commit/8b3b4749eaf5ff401f1d6499c95da00094e9c9d2))
* **editor:** Restrict what binary-data types can be viewed in the UI ([#14685](https://github.com/n8n-io/n8n/issues/14685)) ([11a36b7](https://github.com/n8n-io/n8n/commit/11a36b758df38e16a2c2c258628bf58a030a12d7))
* **editor:** Show `Execute previous Node` panel after disabled node in Schema view ([#14443](https://github.com/n8n-io/n8n/issues/14443)) ([a12c952](https://github.com/n8n-io/n8n/commit/a12c9522d5992a7fc2719644a9cfa4af5cdc3712))
* Fix issue with open router credential test ([#14440](https://github.com/n8n-io/n8n/issues/14440)) ([4362f37](https://github.com/n8n-io/n8n/commit/4362f37df2aed8f4aa8ef22cd8ab0df971ea9a9f))
* **Freshdesk Node:** Fix types issue ([#14730](https://github.com/n8n-io/n8n/issues/14730)) ([38eaef9](https://github.com/n8n-io/n8n/commit/38eaef97fe798037cac8e33455584639a03a531f))
* **HubSpot Node:** Include item index in error messages ([#14704](https://github.com/n8n-io/n8n/issues/14704)) ([e6f26b8](https://github.com/n8n-io/n8n/commit/e6f26b895de0dd3d204c88c10b47286ab63d5f64))
* **LinkedIn Node:** API version update ([#14697](https://github.com/n8n-io/n8n/issues/14697)) ([77e2ac6](https://github.com/n8n-io/n8n/commit/77e2ac64950c6dc7e8d61702e1fc1d66d4730990))
* **MCP Client Tool Node:** Stringify tool result ([#14554](https://github.com/n8n-io/n8n/issues/14554)) ([390c508](https://github.com/n8n-io/n8n/commit/390c5089463ed7aada32a32b1fb34ddf454f7faa))
* **n8n Form Trigger Node:** Remove relience on getWorkflowStaticData for passing query parameters ([#14728](https://github.com/n8n-io/n8n/issues/14728)) ([3feab31](https://github.com/n8n-io/n8n/commit/3feab31792fe4426f58af89009bf39a1bee0213a))
* **Postgres Node:** Fix inserting `null` or `undefined` in `type=json` columns ([#14672](https://github.com/n8n-io/n8n/issues/14672)) ([3add0b8](https://github.com/n8n-io/n8n/commit/3add0b82ba2e77a0416ea273184aceeabfae2a57))
* **Respond to Webhook Node:** Disable expressions in Respond With ([#14727](https://github.com/n8n-io/n8n/issues/14727)) ([fec2284](https://github.com/n8n-io/n8n/commit/fec2284a779917f4d53d05e9b107a977655999e4))
* **Wait Node:** Fix wait node tests by always using a future date ([#14733](https://github.com/n8n-io/n8n/issues/14733)) ([81d08ad](https://github.com/n8n-io/n8n/commit/81d08ad1de4ccfa56b020afc69da2b85f7b1149e))
* **Wait Node:** Validate datetime for specific time mode ([#14701](https://github.com/n8n-io/n8n/issues/14701)) ([3641c1f](https://github.com/n8n-io/n8n/commit/3641c1fb8738471c2ad68d2882ab299506fca4a1))


### Features

* **core:** Add scopes to API Keys ([#14176](https://github.com/n8n-io/n8n/issues/14176)) ([e1b9407](https://github.com/n8n-io/n8n/commit/e1b9407fe9c742c4f050a721f182dfe494101d84))
* **core:** Add support for signed URLs for binary data ([#14492](https://github.com/n8n-io/n8n/issues/14492)) ([7723a13](https://github.com/n8n-io/n8n/commit/7723a138a1f411566ddb0499ac0806ae2cac53e7))
* **editor:** Add drag n drop support for folders ([#14549](https://github.com/n8n-io/n8n/issues/14549)) ([57444d3](https://github.com/n8n-io/n8n/commit/57444d3a16d77aabf3bd4d3835d86eca7aeff8f7))
* **editor:** Align `DynamicStructuredTool` and `DynamicTool` name fields ([#14604](https://github.com/n8n-io/n8n/issues/14604)) ([302258d](https://github.com/n8n-io/n8n/commit/302258dda2d6bb9c8712cb5fbc5d36dd91c6c261))
* **editor:** Fix paywall for dashboard disabled licences ([#14617](https://github.com/n8n-io/n8n/issues/14617)) ([46d9b60](https://github.com/n8n-io/n8n/commit/46d9b6004984bec75687a1b5ffdb3c28868eedb6))
* **editor:** Log details panel ([#14409](https://github.com/n8n-io/n8n/issues/14409)) ([1e0853b](https://github.com/n8n-io/n8n/commit/1e0853b24aa3070805cf9cc7694faf30772ea7ef))
* **editor:** Show logs panel in execution history page ([#14477](https://github.com/n8n-io/n8n/issues/14477)) ([ed19f0f](https://github.com/n8n-io/n8n/commit/ed19f0f39b2a5d4daa67a0645bb82ce0e71968fb))
* **HTTP Request Node:** Replace HttpRequest Tool with tool version of standalone HttpRequest Node ([#14669](https://github.com/n8n-io/n8n/issues/14669)) ([a8fee9a](https://github.com/n8n-io/n8n/commit/a8fee9a4f3e80d9d651fe39927db14f261761648))
* Option to skip validation in getNodeParameter ([#14726](https://github.com/n8n-io/n8n/issues/14726)) ([b615e51](https://github.com/n8n-io/n8n/commit/b615e51f1319130c3a0f918e882aa3ae3bf5a4f2))
* Resolve `parentFolder` when retrieving workflow ([#14656](https://github.com/n8n-io/n8n/issues/14656)) ([bc12f66](https://github.com/n8n-io/n8n/commit/bc12f662e76c435bf385c62823259c626bcafe79))
* **Supabase Node:** Add support for database schema ([#13339](https://github.com/n8n-io/n8n/issues/13339)) ([23f25ce](https://github.com/n8n-io/n8n/commit/23f25cefbfcefbdb0cf74af384f9cda20ced518f))


### Performance Improvements

* **core:** Reuse context in `runOnceForEachItem` mode in task runner ([#14682](https://github.com/n8n-io/n8n/issues/14682)) ([ff47279](https://github.com/n8n-io/n8n/commit/ff47279b25b4a5dc3a224945cb05d53b5e80a7ed))



# [1.89.0](https://github.com/n8n-io/n8n/compare/n8n@1.88.0...n8n@1.89.0) (2025-04-14)


### Bug Fixes

* **AI Agent Node:** Allow removal of system message ([#14407](https://github.com/n8n-io/n8n/issues/14407)) ([2451ead](https://github.com/n8n-io/n8n/commit/2451ead9f3028ed290e5d76ac6fd5b203e4b51db))
* **core:** Restore run data value when offloading to workers ([#14516](https://github.com/n8n-io/n8n/issues/14516)) ([313cfec](https://github.com/n8n-io/n8n/commit/313cfec74da58dc2403d828a2a211c6c4004f7df))
* **core:** Schema parsing bypassing config key assignment ([#14556](https://github.com/n8n-io/n8n/issues/14556)) ([d390258](https://github.com/n8n-io/n8n/commit/d39025800106b4a406fa34332367775d20c54545))
* **core:** Validate task runner mode ([#14376](https://github.com/n8n-io/n8n/issues/14376)) ([52170f1](https://github.com/n8n-io/n8n/commit/52170f1bbc48f2b7ddcb05d7a6fb4f9c1762a3c6))
* **editor:** Add telemetry to Insights ([#14511](https://github.com/n8n-io/n8n/issues/14511)) ([2fb970a](https://github.com/n8n-io/n8n/commit/2fb970aaa1ed7cf588f9e52ee21814fb5fb4e07f))
* **editor:** Implement insight's design feedback 4 ([#14550](https://github.com/n8n-io/n8n/issues/14550)) ([cc089be](https://github.com/n8n-io/n8n/commit/cc089bebd4e12fd9c3690c53568cb0100c838be4))
* **editor:** Schema preview displays for some empty nodes ([#14488](https://github.com/n8n-io/n8n/issues/14488)) ([8c35229](https://github.com/n8n-io/n8n/commit/8c352293b576285d6b371efea72ed31ce274f9a2))
* Fix issue with Qdrant not always connecting ([#14328](https://github.com/n8n-io/n8n/issues/14328)) ([6748db9](https://github.com/n8n-io/n8n/commit/6748db9c3b104aae23c6c3f432e3ac61b5dbef1c))
* **Summarize Node:** Fix property key with dot notation ([#14528](https://github.com/n8n-io/n8n/issues/14528)) ([c890108](https://github.com/n8n-io/n8n/commit/c89010871d28e2cc4d5807fb7b3aa29968a0364c))
* **xAI Grok Chat Model Node:** Remove stream_options parameter ([#14496](https://github.com/n8n-io/n8n/issues/14496)) ([8c417d7](https://github.com/n8n-io/n8n/commit/8c417d7b1b7473cdca0f74bffa41aa87321d808e))


### Features

* Add nested search in folders ([#14372](https://github.com/n8n-io/n8n/issues/14372)) ([cade309](https://github.com/n8n-io/n8n/commit/cade309d3b972bb7be364c42869d2cd11a0e121a))
* **API:** Add user id information on push tracking when available ([#14519](https://github.com/n8n-io/n8n/issues/14519)) ([6195789](https://github.com/n8n-io/n8n/commit/61957899e1ca9c013dbd0c3385f9484d724df3a0))
* **API:** Match insights summary period with number of days filter in graphs and table ([#14500](https://github.com/n8n-io/n8n/issues/14500)) ([ec73958](https://github.com/n8n-io/n8n/commit/ec73958797d1a0a821eda9501507c849859d39a9))
* **core:** Add a new option to customize SSH tunnel idle timeout ([#14522](https://github.com/n8n-io/n8n/issues/14522)) ([965baae](https://github.com/n8n-io/n8n/commit/965baae093c22d2a67a1e4d76c85da9910806994))
* **core:** Handle disabled modules logic and db engine dependent default for insights ([#14243](https://github.com/n8n-io/n8n/issues/14243)) ([b568caa](https://github.com/n8n-io/n8n/commit/b568caa209c92cb3998243562f22706d7e0f235b))
* **core:** Make runtime prototype mutation protection configurable for task runner ([#14515](https://github.com/n8n-io/n8n/issues/14515)) ([d6ae388](https://github.com/n8n-io/n8n/commit/d6ae3889ca48e29469a372396550798678f7bd14))
* **editor:** Make logs applicable for all nodes ([#14397](https://github.com/n8n-io/n8n/issues/14397)) ([d24b684](https://github.com/n8n-io/n8n/commit/d24b684a9520ab8bf14d3496fa3d12adf92ad317))
* **editor:** Show specific content when 0 data on insights ([#14609](https://github.com/n8n-io/n8n/issues/14609)) ([296d5b4](https://github.com/n8n-io/n8n/commit/296d5b4a7f3c5740cdbd2208132124481274caf0))
* **editor:** Tweak nodes panel to update AI category name and highlight AI Transform node ([#14608](https://github.com/n8n-io/n8n/issues/14608)) ([9c34e3d](https://github.com/n8n-io/n8n/commit/9c34e3d534e46191a82d99b23786f0bba945a2fb))
* **Salesforce Node:** Add credentials test ([#14486](https://github.com/n8n-io/n8n/issues/14486)) ([6b2d31c](https://github.com/n8n-io/n8n/commit/6b2d31ca2b40869e1b16982db0a202a7b4e41eba))
* **SearXNG Node:** Add SearXNG tool ([#13218](https://github.com/n8n-io/n8n/issues/13218)) ([0b46055](https://github.com/n8n-io/n8n/commit/0b460552bae3feb1394fd62a0b977204246c4397))
* Update Easy AI workflow ([#14521](https://github.com/n8n-io/n8n/issues/14521)) ([53812a5](https://github.com/n8n-io/n8n/commit/53812a544f00ac71ab79c77bdc2c978bf801bec9))



# [1.88.0](https://github.com/n8n-io/n8n/compare/n8n@1.87.0...n8n@1.88.0) (2025-04-10)


### Bug Fixes

* **API:** Fix ratio tests on insights by workflow ([#14448](https://github.com/n8n-io/n8n/issues/14448)) ([6c73d7e](https://github.com/n8n-io/n8n/commit/6c73d7ed812521f64a4db9a5437f2596953f204d))
* **Code Node:** Use an explicit `indexURL` to load the pyodide runtime ([#14487](https://github.com/n8n-io/n8n/issues/14487)) ([860bb1e](https://github.com/n8n-io/n8n/commit/860bb1ef92bbe4e6fa6f8478dfde37c8e498af65))
* **core:** Fall back to regular mode for `execute` and `executeBatch` commands ([#14381](https://github.com/n8n-io/n8n/issues/14381)) ([84e85c9](https://github.com/n8n-io/n8n/commit/84e85c9469e0417de2d8960a5aa6a91807690e91))
* **core:** Fix routing for waiting webhooks and forms ([#14470](https://github.com/n8n-io/n8n/issues/14470)) ([b5d5b57](https://github.com/n8n-io/n8n/commit/b5d5b5711838fc5a1b63edce4f7fb8dc0a087883))
* **editor:** Fix race condition for updating node and workflow execution status ([#14353](https://github.com/n8n-io/n8n/issues/14353)) ([a495d81](https://github.com/n8n-io/n8n/commit/a495d81c13e9a2721d4900db94d4a9765b0795c2))
* **editor:** Improve node creator items typing and fix missing icons ([#14449](https://github.com/n8n-io/n8n/issues/14449)) ([ad6c83a](https://github.com/n8n-io/n8n/commit/ad6c83afd48dd4f75873231e20316d730a678fdc))
* **editor:** Inline expression previews are not displayed in NDV ([#14475](https://github.com/n8n-io/n8n/issues/14475)) ([aee83bf](https://github.com/n8n-io/n8n/commit/aee83bf3449f275a90d3e51e5bb10e59edd31135))
* **editor:** Prevent moving non owned workflows to folders ([#14474](https://github.com/n8n-io/n8n/issues/14474)) ([2a5c3d4](https://github.com/n8n-io/n8n/commit/2a5c3d49900e8e3e2dee5f19c3922ccc017bd1d7))
* Isolate license SDK proxy settings to avoid affecting unrelated requests ([#14451](https://github.com/n8n-io/n8n/issues/14451)) ([7463f0c](https://github.com/n8n-io/n8n/commit/7463f0c18a67e8e89144bd3e29bba21f245c7a94))


### Features

* **Azure Cosmos DB Node:** New node ([#14156](https://github.com/n8n-io/n8n/issues/14156)) ([b52f9f0](https://github.com/n8n-io/n8n/commit/b52f9f0f6cbd96005f6f81a522955a47379316e1))
* **Email Trigger (IMAP) Node:** IMAP trigger node returns message UIDs ([#13152](https://github.com/n8n-io/n8n/issues/13152)) ([4578709](https://github.com/n8n-io/n8n/commit/457870953aadb54578912abb234c9d546ccbaca2))
* **MCP Client Tool Node:** Add MCP Client Tool Node to connect to MCP servers over SSE ([#14464](https://github.com/n8n-io/n8n/issues/14464)) ([34252f5](https://github.com/n8n-io/n8n/commit/34252f53f9ca586c15f40713678074a358d877f1))
* **MCP Server Trigger Node:** Add MCP Server Trigger node to expose tools to MCP clients ([#14403](https://github.com/n8n-io/n8n/issues/14403)) ([8360283](https://github.com/n8n-io/n8n/commit/8360283c6f28f8d3e7cc60ae1a3982964954cf79))
* **Milvus Vector Store Node:** Add support for the Milvus vector db ([#14404](https://github.com/n8n-io/n8n/issues/14404)) ([048b9d7](https://github.com/n8n-io/n8n/commit/048b9d75890bf27e1dbfbd2862d7377a35e15434))


### Performance Improvements

* **core:** Batch raw insights save and add metadata cache ([#14261](https://github.com/n8n-io/n8n/issues/14261)) ([60afb46](https://github.com/n8n-io/n8n/commit/60afb46094ea11f2479130867ae2409f171e9f09))



# [1.87.0](https://github.com/n8n-io/n8n/compare/n8n@1.86.0...n8n@1.87.0) (2025-04-07)


### Bug Fixes

* **API:** Insights - round failure rate to 3 decimals ([#14325](https://github.com/n8n-io/n8n/issues/14325)) ([cf37ee3](https://github.com/n8n-io/n8n/commit/cf37ee3cedb60dc9bbf6c87c7f6212213c93c61e))
* **Code Node:** Ensure 'Generate Code' works with empty input object  ([#14352](https://github.com/n8n-io/n8n/issues/14352)) ([480b44d](https://github.com/n8n-io/n8n/commit/480b44d0245484fc1554051728a1cb34672a361f))
* **core:** Add cross-origin checks on push endpoints ([#14365](https://github.com/n8n-io/n8n/issues/14365)) ([178628a](https://github.com/n8n-io/n8n/commit/178628a59b322543ac05c0fdf9c62c59c72380b3))
* **core:** Detach workflow from parent folder in source project when transferring ownership ([#14414](https://github.com/n8n-io/n8n/issues/14414)) ([adbfb44](https://github.com/n8n-io/n8n/commit/adbfb44c26681f8ee6ca94867d3a778bfb2f10a1))
* **core:** Return correct trigger count for nodes with multiple webhooks ([#14300](https://github.com/n8n-io/n8n/issues/14300)) ([39e2d35](https://github.com/n8n-io/n8n/commit/39e2d35a710307b9e4d170c3a71eeccc34a08738))
* **core:** Sandbox HTML binary files in viewing mode ([#14350](https://github.com/n8n-io/n8n/issues/14350)) ([9c8a5f9](https://github.com/n8n-io/n8n/commit/9c8a5f9c57e65a56a3b7da5dfa805d23c55e5ee3))
* **core:** Upgrade swagger/openai setup to address CVE-2024-57083 ([#14314](https://github.com/n8n-io/n8n/issues/14314)) ([4a95035](https://github.com/n8n-io/n8n/commit/4a95035b3a46565d04d5c89879ed6f9fd0bb6923))
* Disable autocomplete expression for specialized editor types ([#14344](https://github.com/n8n-io/n8n/issues/14344)) ([0450542](https://github.com/n8n-io/n8n/commit/04505421709f12fda79d3e0eed50baada717cea1))
* **editor:** Autofocus Search in Move Folder Dialog ([#14378](https://github.com/n8n-io/n8n/issues/14378)) ([d60ed74](https://github.com/n8n-io/n8n/commit/d60ed746bb5477498ab29d5c8b6b7fc63e6065e5))
* **editor:** Change label for unexecuted nodes ([#14260](https://github.com/n8n-io/n8n/issues/14260)) ([08450b2](https://github.com/n8n-io/n8n/commit/08450b20af0535cf643dc945867602635ce21e6a))
* **editor:** Disable Drag and Drop for ResourceMapper 'attemptToConvertTypes' switch ([#14327](https://github.com/n8n-io/n8n/issues/14327)) ([64aeb37](https://github.com/n8n-io/n8n/commit/64aeb378140dd2e4f0ae7bfe499062403324c992))
* **editor:** Fix empty objects in schema view in output panel ([#14355](https://github.com/n8n-io/n8n/issues/14355)) ([2f0b5e4](https://github.com/n8n-io/n8n/commit/2f0b5e488ef70cd0ebec4bc2599c42da281265be))
* **editor:** Fix search highlights on node details view table schema ([#14379](https://github.com/n8n-io/n8n/issues/14379)) ([3d64d14](https://github.com/n8n-io/n8n/commit/3d64d140e9eb4cd9fc58c673a307cf1ac83654b5))
* **editor:** Hide node toolbar on `AddNodes` node type ([#14317](https://github.com/n8n-io/n8n/issues/14317)) ([a245a5c](https://github.com/n8n-io/n8n/commit/a245a5ca61fb33c86b2727fe8d1866bc6c4c868c))
* **editor:** Improve sub-workflow debugging for more node error types ([#14347](https://github.com/n8n-io/n8n/issues/14347)) ([9104743](https://github.com/n8n-io/n8n/commit/9104743a5fb4305eeccec55f35ea9555c0a9a979))
* **editor:** Insights FE fixes and improvements ([#14398](https://github.com/n8n-io/n8n/issues/14398)) ([e8a7acd](https://github.com/n8n-io/n8n/commit/e8a7acda6bf656b8e2da08a502cc6d4dc64895a6))
* **editor:** Make styling of search labels inline ([#14323](https://github.com/n8n-io/n8n/issues/14323)) ([8abbc30](https://github.com/n8n-io/n8n/commit/8abbc304f013bbbd63982f47fde22230592063a2))
* **editor:** Memory getting rendered in chat on workflow load ([#14346](https://github.com/n8n-io/n8n/issues/14346)) ([5382531](https://github.com/n8n-io/n8n/commit/538253197079e92117943a6e18021094ddda76fa))
* **editor:** Support 'View Execution' links with multiple branches ([#14345](https://github.com/n8n-io/n8n/issues/14345)) ([744e2da](https://github.com/n8n-io/n8n/commit/744e2da3f9e3af6e5d20827a965bcfb01acd7cdc))
* **Google Sheets Node:** Improve error message when row_number is null or undefined ([#14229](https://github.com/n8n-io/n8n/issues/14229)) ([c5e2d2d](https://github.com/n8n-io/n8n/commit/c5e2d2dddcea53c9896113e41eb66ca4d01e124b))
* **HTTP Request Tool Node:** Fix OAuth2 requests ([#14380](https://github.com/n8n-io/n8n/issues/14380)) ([7cef314](https://github.com/n8n-io/n8n/commit/7cef314535bbbf59f26916206a066bfe3d5591f9))
* **Jira Trigger Node:** Fix Jira webhook subscriptions on Jira v10+ ([#14333](https://github.com/n8n-io/n8n/issues/14333)) ([cd212e4](https://github.com/n8n-io/n8n/commit/cd212e4f78f6704a8b2f1a27f507dcc7784ef6a5))
* **Kafka Node:** Upgrade kafkajs and add tests ([#14326](https://github.com/n8n-io/n8n/issues/14326)) ([5c58e8e](https://github.com/n8n-io/n8n/commit/5c58e8e8cfe5d04917b29d3d7ab9c14c27d95fdf))
* **n8n Form Node:** Add doctype to page ([#14306](https://github.com/n8n-io/n8n/issues/14306)) ([df9ea09](https://github.com/n8n-io/n8n/commit/df9ea095fcc4b0fceb8a11c611396ef31a0c4fca))
* **n8n Form Node:** Remove field requirement and do not inherit description ([#14254](https://github.com/n8n-io/n8n/issues/14254)) ([4bc1c1a](https://github.com/n8n-io/n8n/commit/4bc1c1a547abd1bfff1c43c93f77c33aa1b2ccc7))
* **Pipedrive Trigger Node:** Add support for webhooks v2 ([#14220](https://github.com/n8n-io/n8n/issues/14220)) ([a39502f](https://github.com/n8n-io/n8n/commit/a39502f3bb28d566df284cebf5a12c99b41d103f))
* Show correct message on retry ([#14321](https://github.com/n8n-io/n8n/issues/14321)) ([501963f](https://github.com/n8n-io/n8n/commit/501963f568a6e0a5f9782fe10ad0c2e9aaf6756c))


### Features

* Add example `@n8n/n8n-extension-insights` extension package ([#14360](https://github.com/n8n-io/n8n/issues/14360)) ([b91be49](https://github.com/n8n-io/n8n/commit/b91be496c3c36a8bfe61b57943ea890554e0df3a))
* Add support for google vertex embeddings ([#14359](https://github.com/n8n-io/n8n/issues/14359)) ([85cbfb6](https://github.com/n8n-io/n8n/commit/85cbfb64c0a2645c833c73a03624fdfd0adf2dab))
* **Airtop Node:** Add Airtop node ([#13809](https://github.com/n8n-io/n8n/issues/13809)) ([a7a165d](https://github.com/n8n-io/n8n/commit/a7a165dda259e2626a94c220eb0ffab166544485))
* **API:** Add config to set age threshold for insights compaction ([#14221](https://github.com/n8n-io/n8n/issues/14221)) ([17a829f](https://github.com/n8n-io/n8n/commit/17a829f1a2da1aa0297c8f1f6b0e4af2fbb70c4b))
* **API:** Add insights config on frontend settings ([#14315](https://github.com/n8n-io/n8n/issues/14315)) ([837131f](https://github.com/n8n-io/n8n/commit/837131fc96b7d48d8a5d612d431706d5f8dea41a))
* **API:** Implement BE api for insights data ([#14064](https://github.com/n8n-io/n8n/issues/14064)) ([db38149](https://github.com/n8n-io/n8n/commit/db381492a94d664f5e2ccc42f8830b20c8c19852))
* **core:** Add special `[@tool](https://github.com/tool)` displayOption ([#14318](https://github.com/n8n-io/n8n/issues/14318)) ([73748e3](https://github.com/n8n-io/n8n/commit/73748e300ed4a7f57b9c01f72eba2fbaa24ceef9))
* **core:** Don't store insights for sub workflow executions ([#14384](https://github.com/n8n-io/n8n/issues/14384)) ([7379f44](https://github.com/n8n-io/n8n/commit/7379f44896e2a3e66fee9d547ba929928f93a104))
* **core:** Make detaching floatable entitlements on shutdown configurable ([#14266](https://github.com/n8n-io/n8n/issues/14266)) ([c9565fc](https://github.com/n8n-io/n8n/commit/c9565fc0beea2751ba316fc363a275ea28d20653))
* **core:** Upgrade to express 5 to address CVE-2024-52798 ([#14332](https://github.com/n8n-io/n8n/issues/14332)) ([4110f31](https://github.com/n8n-io/n8n/commit/4110f3188e557a5d8c6d7ee44fb9c23ce73ce751))
* **editor:** Display a notice for HTTP header auth credentials ([#14389](https://github.com/n8n-io/n8n/issues/14389)) ([ec4dd9f](https://github.com/n8n-io/n8n/commit/ec4dd9f762f02c6da6f1c7e1e7faa1fa89802092))
* **editor:** Hover actions on the logs overview ([#14386](https://github.com/n8n-io/n8n/issues/14386)) ([8f9ea23](https://github.com/n8n-io/n8n/commit/8f9ea23019241de47fdee3a1da120f7c05a5aadb))
* **editor:** Insights dashboard ([#13739](https://github.com/n8n-io/n8n/issues/13739)) ([90ba680](https://github.com/n8n-io/n8n/commit/90ba68063116cdca358d74bf3c392af46280a2f5))
* **editor:** Show error state in the logs overview ([#14248](https://github.com/n8n-io/n8n/issues/14248)) ([37e5349](https://github.com/n8n-io/n8n/commit/37e5349fe139d9f292145d06218aa235b51bab38))
* **GitHub Node:** GitHub Node Overhaul implementation [#12271](https://github.com/n8n-io/n8n/issues/12271) ([#13238](https://github.com/n8n-io/n8n/issues/13238)) ([33e265a](https://github.com/n8n-io/n8n/commit/33e265aaa8563225eb408fe7dcff8412784cf6f9))
* **MongoDB Chat Memory Node:** New MongoDB Chat Memory Node ([#14049](https://github.com/n8n-io/n8n/issues/14049)) ([0bac6ff](https://github.com/n8n-io/n8n/commit/0bac6ffac6e8b1db5c9167ef7954a83c9c2230a2))
* **Postgres Node:** Batching warning for executeQuery operation insert query ([#14287](https://github.com/n8n-io/n8n/issues/14287)) ([f85b851](https://github.com/n8n-io/n8n/commit/f85b85185109b0ebd3f2f0def8a7c4a0902c8014))
* **Think Tool Node:** ToolThink, a simple tool to force the AI agent to do some thinking ([#14351](https://github.com/n8n-io/n8n/issues/14351)) ([281b70b](https://github.com/n8n-io/n8n/commit/281b70be044b3fd70a26a16d14eebf38bab739a6))



# [1.86.0](https://github.com/n8n-io/n8n/compare/n8n@1.85.0...n8n@1.86.0) (2025-03-31)


### Bug Fixes

* **API:** Fix import config import ([#14137](https://github.com/n8n-io/n8n/issues/14137)) ([6f60d65](https://github.com/n8n-io/n8n/commit/6f60d657eb0dc6ec9e99fe91d5b5cd99662d7ef8))
* **API:** Summarize insights from current datetime instead of beginning of the day ([#14186](https://github.com/n8n-io/n8n/issues/14186)) ([bf274c0](https://github.com/n8n-io/n8n/commit/bf274c0a870eba3ff293ee6033289e2d2b39fae1))
* **Baserow Node:** Fix issue where database selection was returning other types ([#14115](https://github.com/n8n-io/n8n/issues/14115)) ([10f6c3b](https://github.com/n8n-io/n8n/commit/10f6c3b1d35db31376419da0e6e791f9f903d266))
* **Basic LLM Chain Node:** Prevent incorrect wrapping of output ([#14183](https://github.com/n8n-io/n8n/issues/14183)) ([b9030d4](https://github.com/n8n-io/n8n/commit/b9030d45dead945342be88726cde2d0043ff4ab7))
* **Basic LLM Chain Node:** Prevent stringifying of structured output on previous versions ([#14200](https://github.com/n8n-io/n8n/issues/14200)) ([bbd6e8e](https://github.com/n8n-io/n8n/commit/bbd6e8ee415f27f40929ec404f5dd6e4c216f423))
* **core:** Fix OAuth1 callback token request ([#14251](https://github.com/n8n-io/n8n/issues/14251)) ([4ea219b](https://github.com/n8n-io/n8n/commit/4ea219b1f783370c39be3e776e664f71348c67c9))
* Correct connections in SentimentAnalysis and TextClassifier ([#14155](https://github.com/n8n-io/n8n/issues/14155)) ([70764a0](https://github.com/n8n-io/n8n/commit/70764a02589c146bf8e863c9c652ac30858841af))
* **editor:** Adjust URL on lost change warning Cancel or failed save ([#13683](https://github.com/n8n-io/n8n/issues/13683)) ([fdcca1d](https://github.com/n8n-io/n8n/commit/fdcca1d0ed7f7c32aa6c40f4751f554826064619))
* **editor:** Change freeAiCredits success text size ([#14161](https://github.com/n8n-io/n8n/issues/14161)) ([ca01236](https://github.com/n8n-io/n8n/commit/ca01236dd11b3c021358671ed99cbada4a34e325))
* **editor:** Check for when to show the community+ modal for the folder's feature ([#14146](https://github.com/n8n-io/n8n/issues/14146)) ([9e3bfe2](https://github.com/n8n-io/n8n/commit/9e3bfe23f67dca8d31bcff8758ed5d076477f9f3))
* **editor:** Handle Leading Spaces in Workflow Search ([#13889](https://github.com/n8n-io/n8n/issues/13889)) ([8aad7db](https://github.com/n8n-io/n8n/commit/8aad7dbaf69d7e2826f8798b6682d269c6c6f37f))
* **editor:** Remove selection box when only one node selected using selection rectangle ([#14160](https://github.com/n8n-io/n8n/issues/14160)) ([acbaec5](https://github.com/n8n-io/n8n/commit/acbaec550f1ebf560262d6a6492651ebaf72d78d))
* **editor:** Remove title icon on Overview subpages ([#14128](https://github.com/n8n-io/n8n/issues/14128)) ([4bd42e2](https://github.com/n8n-io/n8n/commit/4bd42e2f3a8a79c33a20f992e2727f8bb3dae101))
* **editor:** Show left-hand NDV floating nodes in correct order ([#14126](https://github.com/n8n-io/n8n/issues/14126)) ([71f281b](https://github.com/n8n-io/n8n/commit/71f281b90da6f71db04c9b22dee9e5976b0abab4))
* **Microsoft SQL Node:** Fix maximum call stack on execute query ([#13940](https://github.com/n8n-io/n8n/issues/13940)) ([a082a16](https://github.com/n8n-io/n8n/commit/a082a16c5d785d87ea334bb2285000bd3f44c157))
* **n8n Form Node:** Hidden field fix ([#14219](https://github.com/n8n-io/n8n/issues/14219)) ([9bd72ea](https://github.com/n8n-io/n8n/commit/9bd72eaa139649811cb1114f3cf40f22d5dfe905))
* **n8n Form Node:** Show Form Complition after Form Complition page ([#14226](https://github.com/n8n-io/n8n/issues/14226)) ([af77730](https://github.com/n8n-io/n8n/commit/af777307b3fddcf553fb68786260dba79f32d87c))
* **OpenAI Node:** Show correct inputs for AI node ([#14142](https://github.com/n8n-io/n8n/issues/14142)) ([5bf10cd](https://github.com/n8n-io/n8n/commit/5bf10cdb4abe364a8f914362fb94841530aa02c9))
* **Slack Node:** Make sure paginated calls use the defined limits ([#14185](https://github.com/n8n-io/n8n/issues/14185)) ([24fad51](https://github.com/n8n-io/n8n/commit/24fad512da9bcd4fd002dfac3cff5935ed00204f))
* **Slack Trigger Node:** Fix issue with new user event not correctly working ([#14129](https://github.com/n8n-io/n8n/issues/14129)) ([5f4e56f](https://github.com/n8n-io/n8n/commit/5f4e56f75b6659fc21b3d18817f5afabc022b5b7))
* **Summarize Node:** Fix type casting of strings and numbers ([#14259](https://github.com/n8n-io/n8n/issues/14259)) ([4443a5f](https://github.com/n8n-io/n8n/commit/4443a5f53281064f9d474d61435c83e004d7a403))


### Features

* **API:** Add day to week compaction for insights dashboard ([#14165](https://github.com/n8n-io/n8n/issues/14165)) ([db99974](https://github.com/n8n-io/n8n/commit/db99974cca364d16391d00d5aec066b68cb8a4e6))
* **API:** Add failureRate as sort field for insights by workflow ([#14247](https://github.com/n8n-io/n8n/issues/14247)) ([877823d](https://github.com/n8n-io/n8n/commit/877823d887fe7d387a5bbe25a606de1f1d22daa5))
* **API:** Add fields to insight by time type and export types from index ([#14172](https://github.com/n8n-io/n8n/issues/14172)) ([3d332ab](https://github.com/n8n-io/n8n/commit/3d332ab04fa0de9873cd8944514afa4e2bf7907b))
* **API:** Create schema and dto types for insights dashboard query param and api responses ([#14163](https://github.com/n8n-io/n8n/issues/14163)) ([6eee081](https://github.com/n8n-io/n8n/commit/6eee081cf3f99e7cf925a0daef0728e5537e1e57))
* **API:** Return null deviation on insights summary if previous period has no data ([#14193](https://github.com/n8n-io/n8n/issues/14193)) ([ffc0a59](https://github.com/n8n-io/n8n/commit/ffc0a596e00d1cbf14ff2980894d52025bfc1187))
* **core:** Explicitly warn if tool passed binary data to Agent ([#14071](https://github.com/n8n-io/n8n/issues/14071)) ([88f5851](https://github.com/n8n-io/n8n/commit/88f58514e6d7b5fe11d91b7e524b3447c09474eb))
* **editor:** Improve schema view empty state when node has binary data ([#14044](https://github.com/n8n-io/n8n/issues/14044)) ([22ddf1b](https://github.com/n8n-io/n8n/commit/22ddf1b644dcddfff3a97bd7953823f63ab7c41a))
* **editor:** Logs overview panel ([#14045](https://github.com/n8n-io/n8n/issues/14045)) ([d1710a1](https://github.com/n8n-io/n8n/commit/d1710a1da375d13a687add4f48400faab62169d7))
* **Matrix Node:** Add audio and video media types ([#14057](https://github.com/n8n-io/n8n/issues/14057)) ([cb01f2d](https://github.com/n8n-io/n8n/commit/cb01f2dd0d018ef54fc63b255abc0a054d01b6ed))
* **SendGrid Node:** Add option to specify "reply to" email addresses ([#14282](https://github.com/n8n-io/n8n/issues/14282)) ([68d9460](https://github.com/n8n-io/n8n/commit/68d9460f2acece495671667cacf6faa2e9a70cbf))
* **Telegram Trigger Node:** Add options to restrict to chat and user IDs ([#14164](https://github.com/n8n-io/n8n/issues/14164)) ([f651766](https://github.com/n8n-io/n8n/commit/f6517664dd05878b0e5264668c52c74cbdd2d027))



# [1.85.0](https://github.com/n8n-io/n8n/compare/n8n@1.84.0...n8n@1.85.0) (2025-03-24)


### Bug Fixes

* Allow saved credenitals types of up to 64 characters instead of 32 ([#13985](https://github.com/n8n-io/n8n/issues/13985)) ([bc15bb1](https://github.com/n8n-io/n8n/commit/bc15bb18d9f33abdeed24e26826e7f3308d3eef2))
* Allow username to be set in Redis chat memory ([#13926](https://github.com/n8n-io/n8n/issues/13926)) ([b2e359a](https://github.com/n8n-io/n8n/commit/b2e359ac1c2dfdf79f8d50fe83998eda5fc34dd2))
* **core:** Allow running webhook servers in multi-main mode ([#13989](https://github.com/n8n-io/n8n/issues/13989)) ([e0fd505](https://github.com/n8n-io/n8n/commit/e0fd50554d48c873c8f77169d1a17438391dd973))
* **core:** Bring back the missing GMT and UTC timezone for workflow settings ([#13999](https://github.com/n8n-io/n8n/issues/13999)) ([bda0688](https://github.com/n8n-io/n8n/commit/bda068880ea7a44718e01a156e97f09c9ec2bc46))
* **core:** Do not use `url.includes` to check for domain names ([#13802](https://github.com/n8n-io/n8n/issues/13802)) ([d3bc80c](https://github.com/n8n-io/n8n/commit/d3bc80c22bbbf0ae39c88a6f085d5f80aa8a0e82))
* **core:** Don't fail partial execution when an unrelated node is dirty ([#13925](https://github.com/n8n-io/n8n/issues/13925)) ([918cc51](https://github.com/n8n-io/n8n/commit/918cc51abc79bbcfb6a333d5ecafa07a9e986b6f))
* **core:** Ensure frontend sentry releases also follow semver ([#14019](https://github.com/n8n-io/n8n/issues/14019)) ([401ed2c](https://github.com/n8n-io/n8n/commit/401ed2ce1194ad7ff238debff418f0db77eb06e6))
* **editor:** Add "time saved per execution" workflow setting ([#13369](https://github.com/n8n-io/n8n/issues/13369)) ([6992c36](https://github.com/n8n-io/n8n/commit/6992c36ebb3aa608ce31396f9b7ed0aa10c80299))
* **editor:** Add smart decimals directive ([#14054](https://github.com/n8n-io/n8n/issues/14054)) ([1a26fc2](https://github.com/n8n-io/n8n/commit/1a26fc2762dee366d2ce7ccf24e173cdc761c70c))
* **editor:** Fix routing between workflow editing and new workflow pages ([#14031](https://github.com/n8n-io/n8n/issues/14031)) ([6817abe](https://github.com/n8n-io/n8n/commit/6817abe47facd7ff0e42a66599827d42c4df757c))


### Features

* Add appendN8nAttribution option to sendAndWait operation ([#13697](https://github.com/n8n-io/n8n/issues/13697)) ([d6d5a66](https://github.com/n8n-io/n8n/commit/d6d5a66f5dc28d926755ca8153f91c7be0742cf5))
* Add xAiGrok Chat Model node and credentials ([#13670](https://github.com/n8n-io/n8n/issues/13670)) ([cc502fb](https://github.com/n8n-io/n8n/commit/cc502fb8c34b65d569b4abe4603cc8ef1eadc7a7))
* Allow custom scopes for Entra credential ([#13796](https://github.com/n8n-io/n8n/issues/13796)) ([7e10361](https://github.com/n8n-io/n8n/commit/7e1036187ff7bd5be990f191a3ac8ef002e7812a))
* **API:** Fix generation strategy for mysql/mariadb ([#14028](https://github.com/n8n-io/n8n/issues/14028)) ([24d8eac](https://github.com/n8n-io/n8n/commit/24d8eac85d8ce95671aabf8500139b3ef3e19a56))
* **API:** Implement compaction logic for insights ([#14062](https://github.com/n8n-io/n8n/issues/14062)) ([d8433d2](https://github.com/n8n-io/n8n/commit/d8433d289543c40854e59b0384be356a3d7b947d))
* Cat 720 improve pre merge ci ([#14116](https://github.com/n8n-io/n8n/issues/14116)) ([743b63e](https://github.com/n8n-io/n8n/commit/743b63e97a9a96dfaf35f138a79eddaad9bb2dbb))
* **core:** Add folder synchronization to environments feature ([#14005](https://github.com/n8n-io/n8n/issues/14005)) ([198f17d](https://github.com/n8n-io/n8n/commit/198f17dbcf0b21e579f9a68466494662257dbe44))
* **core:** Add tool to uninstall a community node ([#14026](https://github.com/n8n-io/n8n/issues/14026)) ([e0f9506](https://github.com/n8n-io/n8n/commit/e0f9506912aa6a129df332185063291f0627f9ca))
* **core:** Allow community nodes to be used as tools ([#14042](https://github.com/n8n-io/n8n/issues/14042)) ([9d698ed](https://github.com/n8n-io/n8n/commit/9d698edcebc8cdbf9fefc3bf89a13f9daa32f40b))
* **core:** Allow customizing auth cookie samesite attribute and CSP headers ([#13855](https://github.com/n8n-io/n8n/issues/13855)) ([17fc5c1](https://github.com/n8n-io/n8n/commit/17fc5c148b99b8f346abf2142a1d2bee567b2621))
* **core:** Enable folders feature via license server ([#13942](https://github.com/n8n-io/n8n/issues/13942)) ([fa7e7ac](https://github.com/n8n-io/n8n/commit/fa7e7ac2e7b38418619ebe1f3839d47c491419d2))
* **core:** Implement API to retrieve summary metrics ([#13927](https://github.com/n8n-io/n8n/issues/13927)) ([b616ceb](https://github.com/n8n-io/n8n/commit/b616ceb08b712ecd350114acc48a9a0f35843c0a))
* **core:** Support importing a singular workflow object ([#14041](https://github.com/n8n-io/n8n/issues/14041)) ([91b2796](https://github.com/n8n-io/n8n/commit/91b27964d80309ce493200289b31a83ef6051b4d))
* **core:** Update endpoint to update a workflow, to support updating the workflow parent folder (no-chagelog) ([#13906](https://github.com/n8n-io/n8n/issues/13906)) ([3a5cc4a](https://github.com/n8n-io/n8n/commit/3a5cc4ae957ea5f370472f08d2af4ac29c3b21b2))
* **editor:** Add variables and context section to schema view ([#13875](https://github.com/n8n-io/n8n/issues/13875)) ([c06ce76](https://github.com/n8n-io/n8n/commit/c06ce765f11dcde4731d3739e1aa5f27351c3cc2))
* **editor:** Always show collapsed panel at the bottom of canvas ([#13715](https://github.com/n8n-io/n8n/issues/13715)) ([2e9d3ad](https://github.com/n8n-io/n8n/commit/2e9d3ad3e14da7aa2f3b3b9577858791e9128908))
* **editor:** Insights summary banner ([#13424](https://github.com/n8n-io/n8n/issues/13424)) ([df474f3](https://github.com/n8n-io/n8n/commit/df474f3ccbc629a8e308359e6a4973cc00b86e17))
* **Extract from File Node:** Add relax_quote option ([#13607](https://github.com/n8n-io/n8n/issues/13607)) ([830d2c5](https://github.com/n8n-io/n8n/commit/830d2c5df53c5436f89868dfe23cf55c41585a46))
* **n8n Form Trigger Node:** Respond with File ([#13507](https://github.com/n8n-io/n8n/issues/13507)) ([8f46371](https://github.com/n8n-io/n8n/commit/8f46371d77262aa0a924e1c58cf9691327e0f193))
* **Salesforce Node:** Add support for PKCE ([#14082](https://github.com/n8n-io/n8n/issues/14082)) ([defeb2e](https://github.com/n8n-io/n8n/commit/defeb2e817dbc559844124f20e6bebf7717d878a))
* **SeaTable Node:** Update node with new options ([#11431](https://github.com/n8n-io/n8n/issues/11431)) ([d0fdb11](https://github.com/n8n-io/n8n/commit/d0fdb11499de2e5fb1602b7cc86f2b24543ce50f))
* **Simple Vector Store Node:** Implement store cleaning based on age/used memory ([#13986](https://github.com/n8n-io/n8n/issues/13986)) ([e06c552](https://github.com/n8n-io/n8n/commit/e06c552a6a0471ec60862247f6a597b8ab5f9cd3))
