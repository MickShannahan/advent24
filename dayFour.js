const input = [
  "XMASMXMXMAXSMMSSSSXSXMASMSAXMAXAXXMASASMSXSSSSSMMXSXMASASMSMMXSASASXXXXSMSXSMSXMASXXMASMMASXMXSXMSMMMMMSXXMASASMSSSSSMMSMMSSMSMSSMXSAMMSMMMM",
  "XXMSAMXSXMMSASXAAAAXMMMMAMXSMSMMSSMMMASXMAAAAASASMAAAAMAXXAMMAAXSASMMSAMAAAMASAXAMMSMMMMSAAXSAXASAMMMSAAXSAMXAAAAMMAAAAAAMMAAXMASAAMAMAMXMAM",
  "SMMMXMASMMASMMMMMMMMMASMMMXAAMXMAAMMMAMAMSMMMMSXMASMMXMAMSASMSXMMAMAAMAMMMSMASAMASMAAAAXMAMMMMSXMASAAMXSXSAMMSMMMMMSMMSSSMSMMMMMSMAMAMASMSSS",
  "XAAMMMMSAMASASXSAAAXSASAMXSMAMXMSSMXMSMXMAXASXMMAXMXXSMMMMASXXASXAMMMSAMXAXMAMXMAMMSSMMSMMXAAASMMAMMXMMXXSAMMAXASXAAAAXMAASAAXAXMAXSASXSAAAS",
  "SSMSAAMSMMASMSASXSSMMASMMMMMSSMAAMMSMMASMSSMMAXXMXMXMMAXXMAMASAMXMXXAXXXMSSMMSAMXSAMXMSAMMSSMMSAMMSMSMAMXSAMSMMAXMXSSMXXMMSMMMMMSAMMMMMMMMMM",
  "MMMMMXMSXMXSXMXMAXMAMXMAAMXAMAXMASAAAMXMAMAMSMMSMAMSMSAMXMASXMAMASMMMSXMAMAAAMASAMXSAMMAAMAAMASXMAAAAXMSASAMMXSSMSAMMMSXXXMASXSAMASMSAMMASAS",
  "ASXSMSASXXMSAMXMSMSMMMMSASMXSAMXXMXSXMAMAMAMASXAXAXAXMASXSAXASXMMXAAAAXMSMMMMMXMMSAMAXMMMMSMMASXMMMMMMMMAXXMAMAAAMXXAASMSXSAMAMXMAMXMAMSAMAS",
  "SMAAAMAMMMMMASMMMMSAAMXMSAMMXMSSSMAMAXMSSSXSASXMSMSMSMMSXMSSXMMSXSSMMSSMMXSASAMXMMASMMAAMMMAMXSXSASASASMSMSXSMSMMMMSMMSAMXMASMSAMSXMSSMMXXAM",
  "MMMMMMMMXAAMXSAMMAXSMSXXAMSSSMAAXMASASAMXMMMASMXAMAXMAASAAXMXAXXAAXXXXXAAXMAXSAAXSAMAASMSAXXMAMXSASASAMAAAXMXXMMAXAAAMMAMMSAMXMMXAAASAAASMSM",
  "SASASXSSXSMSASAMMMMMMXMMAXAAAMASMMXXXAXXAMAMXMXMMXXMXMSSMASMSXMSXMAMSMSMMSMMMXSMMAMAMMAMMXSAMXSAMMMXMAMMMSMAMXXXSXSSSMSAMAMASXMXMMMMSAMMSAAA",
  "SASASAXAAXXMXSSMAAAXAAMSXMMSMMMMAXASXSXSASMSXMSMSMSXAXXXMMMMAAMMAXXMXAXAAXASXMAMMAMXXMASASXXMMMASXMMMMMXSAXSASMMXAAAXASXSMSXMXMASXSAXAMSMXMS",
  "MAMAMAMMMMAMAMXXSMSSMSMMXAAXXSASAMXXAAASAMXMXSAAXAMSMMMXSAAMASASMMMMMSAMXSMMMSASXXMXXMAMXSSMXSMMMAASMMSMXAXXMAAAMMMMMMMAMXMAMSMXSAMAMMMXMXMX",
  "SAMXMXMAMSSMMSSXMXXAMMASMMMXASAXMMSMMMMMXSAMMSMSMSMXMASAMSMSAMMMXAMXAXASMXMAXMAXAASXSAMXAMXMAXASMMASAAXAMSMSSSMMMXAXXXMXMSSXMAAAMAMSXSASMAMX",
  "SXSMSASXMAXAAAAXMXMASMMMAAAMMMXSAAMASMAMASASAXMAAAAASMSAXXMMASMMSSMMSSMMMMSSSMSMAMMAMMSMASXMXMAMAMASMMSSMAAAAASMXSMSMXSAMXAASXMXSSXXAMAXXAMX",
  "XSMASASXAMXMMMMXSMSAMAAXSMMSAAASMMXAMXAMMMAMMMSSSMSMSXSMMXAMAMAAAXAAAXMASAAAXAXAXXMAMAXMXMAAMSMMXMASXMAAXMSMMMAXASXAAXMXSXMXMASAXMAMAMXMSSXM",
  "XSMXMMMXASAMMSMAXAMMSSMMMMXSMSXXMXMSSSSSSMXMAMXMAXAAXXMASXMMASMMSSMMSMSASMMMMXMXMXMXMMSMXXMMMAAMMMXSAMSSMMMXXXMXMMMMSMSASMAXSAMSMSMMAMXMAXAS",
  "SMMSAAXSAXAAAAMMMXMMXAMXSAMXXXMASAMXAMAAAASXMSSSMSMSMSMAMMASASAMXMXAAAMASXAXMSMSMAMAAMAXMSMXXMXMAMSSXMAXAASMSAMXMAXSAAMAMAMMAMAXXMASXSXMAMMM",
  "MAASXMAMSMSMSSSMASMMMSXAXASXMXSAMMSMXMMMMMXAAAAXMAXAAXASXSAMMMAMMMSAMXMAMMMXXAAAMASMSSMMAAAMSXXMAXAMXSASMMXAXAAMMMXSMSMAMSXMMMAMAXMAMSAMSSSX",
  "SXMSAMXAXXAAXAAMXSAASMMMSAMMAAASXXAXMASMMMSMMMSMMMSXXXMMMMASXXSMXMAMXAMXMAMMSMSMSAMXMAMSSMSMAAMSSXMSAMXSMSXSMSMSSSMMSXMXMXAXXMSMSXMAMSAMAAAM",
  "SAMXXXMASXMMMXMMASMMMXAXMMMAXXMAXSAMAMXAXMAMAAAAMMMXXMAAXXMMMAXAMSASXSXSSMXAMAMMMMMAXAXXASXMMSMAMXXMMSSMAXXAXXAAAAASAMXXMSMMMMAAXXSXXSAMMSMA",
  "MAMMMXMXMXAAXSAMXMAXSSXMXMXSAMXMAMAXSSMMSSSMMSSSMAAAMSSMSXMAMXMAMSMMMXMMAAMMSAMXAMSMMMXXMMXXAAMAMASMXMAMMMMMMMMMSMMMXAAXXAMAAXMXMASMMSAMAMMS",
  "XAAAAMMASMSMSAAXASXMMMXMXSAMAMMXSMMMXAAXXAAMMMMAXMMMMMXASASXSSMXMXAAASMSSMAMMMSMMMAMAMSAASMMSSSXSMXAXSXMXAAAAMXAMASXSMSMSASXSSSSMXMAASXMASAX",
  "SXSMSAMXSXAXXMAMXXMAXSAMAMXMAASAMAMAXSMMMSMMAASMMXMXAXMASAMAAXMAMXMMMSAAMMSXAAXMXSASAAMSMAXMXAMXSXSSMMMMSSSXSMMMSAMAMSAAMAMXMAXMASXMMSXMXSMS",
  "MAMXMXMXSXSSMXMXXXSSMAAMAXMXSXMASMMSMMMSAMXSSMSXAAXMXMSAMAMMMMSSSSXMASMMMXMMMSSMASMMMSXMSMSMMSMAMXMAAMMAAXMAXAMMMXMAMAMSMMMMMAMSAMXSASASMMXM",
  "MXMASAXSMAXAAMSAMXXXXMXSSXSAXMMMMAAXAAMMXSAMMXMXSMSMSXXASMMMMMMAAMSSMXXAXXXAMXAMAMAXXMAXAMAMXMMASASMMMMMSXSASAMSMSSXSMAXXAAMASMXMXXMASAMAAAX",
  "MAAXSSMAMAMMSXMASMAMMXXXAAMAMMAMXMXMMMXSAMXMSAMXAAAMMXSAMXAAAAMMMMXSASXMSSSXMSXMSSXMASMSMSAMAAMXMMSASXAXAAMASAMAAAMMXXSXSXMMAMXXMMAMXMAMSSXS",
  "SAXAMXSXMASXXXSSMMXMASMMMMMAMXSSSMXSASMMASXMSASMMSMASMXXMMXMXSSXXAAMXMAAAXAMAMXAASXAXXAAASASMSSSSXMASASMMSMXMASMMMSSMMMXMASMSSSMMAAMASAXXXAM",
  "AAMSMMMMSASMSASAAASXXAMXMASXSAASAAASXMXSASAASMXMAXXXAAMSMSSMSAMXXMXSXSMMMSAAMMMMASMSAMXMMMXXAAAMMAMAMXXAAMAMSXXXXSAXAAXASXMAXAAAMSASASMSAMXM",
  "AXAXSAAXMAMAXXMMAMAXMXMAXAMAMMMMMMMMAMASXSMMXXXMAMMXMSASAAAMAASMXAAMXSXMXMXMAXXMXMAMMSAMXXMXMMMMSAMMMASMMSAXSXMMXMASMMSXSMMXMMMMMMAMAMXAXSMS",
  "AXSXSSSXMXMSMMMXXAMSMSSSSSMSXSAXMXMSSMAXAXMAMXMMMAMMXMXMMMSMSAMXMMMSAMAMXMAXMAXMXMSMAMXXMAMXXASXMMMASXMMASMMMAMAXXAXAXSXMASAMXXMXXMMSSSMASAA",
  "SAMXMAMXSAMAAAAAMAXAMAAXAXXMAMMXSAAAXMSMMMXMMAAAXAMSXMAXXXMAMXSAMAXMAXXMAMSSMAMMSAMASXAMXSXMMAXAAXSAMAAMAMXASAMSSMMXMXMASMMAMAMMSMAAAXAXAMAM",
  "MAMXSAMXMASMSMSMSSMMSMSMMMSMAMAAXMMMSMMAAMMASXSXSASXMSSMSASXMASMMAMSAMSSXSAAXAAXMMMAMMASMMSSMMSSMMMSSSMMMMSXSMSXSMAASASMMMSXMASMMMMMXSXMASXX",
  "MAMXMASASAMMMXMMXMXXAXAAXAASMMMSSMXXMAXSMMAMSAAASMMAXAMXAAMXSXMASXXMXSAAXMXMMSSXAAMASMAXAAAXAAAMASAXXAXXMASAMXAMXMMXSAMXAXXMXXMAAMXMASAMAMAM",
  "SSMSSXSXMASAMAMMAMXXXSXSMMXSXAAMAMXMSSMASMSXSMMMSASXMMSSMSMAMAMXAMMMMMMSMMMXAAMMSMSAXMASMMMMXMMXAMMSSMMSMMSASAMXMXSAMMMMSMMSSSSSMSMMASAMASAA",
  "AAAAAXSMSMMMMASMASXSMXAMASMXXMMSAMMXAAXSMMXAMXMXSAMXMXMAXXMASAMXMAAAAMXXAAAXXXSAXMMMXSAMASASMMXSAMXAAMAMAMSAMXXXSAMAMXSAAAXAAXMAMAMMMSXMASAX",
  "SMMMSMXAAXAXSXSMASAAMSMMAMXAXXASASXMSSMXAXMAMXSAMAMXMASMMXMXSAMXXSSSMSASXMSSMMMASMXMAMASAMXSAAASAMMXMMASAMMAMXSMMMMSXAMSSMMMSMXAXASAMMAMASMS",
  "XMXMAXMMMSSXMAXXMMXMMXAMXMMMMMMXXMAXAAASXMSXMXMASXMASASXSMSMMXMAXMAMAMMSXSAXAAMXMMAMXSAMXSSSMMMSAMAMXSASASXMSXXAMXAMMXMAMASAAXSSSMSASXXMMMAA",
  "AMASMSSXXAMASMMMXSSSMSSMSXAAXASMSSSMXXMAXAXMMAMXMMMXMASAMAAASXMXAMAMMSMMMMASMMSXMSMMAMASMSAMXMASAXMAXMASAMXAAAMSMMASAAMSSXMAXMAXAMSAMAMSSMSM",
  "XSAXAMAXMAMAMAAXXAAAASAAXSSXSMSAXAAXMSSSMSMMSASAAAAMMAMXMSMXMAMMMSXMMAAXXMAMAAAMXAXMASAMXXMXMMXSXMASMMMMMMMMMMMAAMASXMMAXMASMMMSXMXXMAMAAMAX",
  "XXMSXMMMMMMXXXMSSMSMMXMMMXXXMAMXMSMMXAAXMASASASMSMSXSAMAMMMSSMMMXMASXMSMAMSSMMMSMASXMMMXMASAXXAMXAMAAAMAMAMAAASMSMASAMXXAMXXXXAAAMSXSSSSXMMX",
  "MAMSXSXSAASXSAXAAXMASXSXSAXMSMSAMXXXMMSMSAMXMXMAMXMMXASMSAAAAAAXXMMMSAMXMSAMXSAMMMMAASXSSSSMSMASMSSSSMSASXXMSXSAAMXSAMSASASXXMXSXMSAMXAXXMXM",
  "MAMMAXASAMXAAAMSSMSXSASASASMASMXSAAMXAMAXXMXSMMAMMSMSMMXMMXMXMMSXASAMXMASMASAMMMSAMXMMAAXXMAXMAMAAAMAASMMXAAXXMXMSAMXAXAAAMMSMMMMAMSMMMMXSAA",
  "SMSMSMMMMXMXMXAMXMASMAMAMAXMMMXMMXSASAMXAAXAXAXAMAAXAAASMSSSXMASMMMAMXMSXSAMASXAXMSMSMMMMMMSMAMSSMSMMMXMASMXMAMAXMXXMXMXMXXAAMAAAAAAXAAXXSSS",
  "XXXAASMASAMMMXXMSAMXMAMAMMMMXMAMSAXXMAXXSSMMSMSSSSMSSSMXAAAAAMASAMSAMSXMXMMMAMMMSMAMMASAXSAMAMXAMXMAMAMMASAMXMSSSMSXSMMAXSMSSSSMSSSMSSSMMMAM",
  "MXMMMASASAMSXSXAAAXMSASASMAMAMMXMASASAMXAMAMMAAXMAXMMAXMMMSMXMASMMMAXMASMSMMSMSXAMMXSAMXXMASAMMXSXSMMAAMASAMMXAAAXAXMASMSXAXAMAMAMAXAAMAAMAM",
  "SAMXAMMXMXMSASAMSMMXXXAMXXAMSMSXSASXMASMASMMSMMXSXMSSSMMSAMXXMXSXXSMMSAMMSAAXASXMSMAMASXSMAMAXAASAXMSMSMASAMAMASMMMMMMMSAMXMAMXMASMMMAMSMSAS",
  "SMSMSSMMSXXMAMXXAAXSXMXMAXMMMAMAMAXXMMXMMMMXMAAASMMXAMAAMASMSMMMXMXAAMAXASMMMXMAXXMASXMAAMAXMMMXSAXXAMAMXSMMSAAAXXXAAXMXSXMSMMMSASMSXMAAXAXX",
  "XASAMAMMAMXMAMSSSMMXAAAXXMMAMAMXMXMMSSXXMAMXXMMMSAMMMMMMSAMAMAASAMMMMSSMASXXXSMMMMMAMAMAMSSSSSXMMMMSASASMXAAMMSXMASXMMSAMMXAXAAMASASASXSMMMX",
  "MAMAXAMXAMXSMSAMAXAXSMMSXSMASMMSMMMAAXMASXSMSSXASXMAXXMAMMSASMMSASAXMAMXXXXXASASASMMSAMAXAMXMAXSASXSXMAXAXMMSAMAMXSAAAMAMASMSMSMAMASAMAXXMAX",
  "SXXSMMXMAXXMMMMSSMMXXAMXAXMAMAAAMAMMXSMXMMSAAXMMMASMSMMXSASXSAAXAAXXMAAMMMSMAMAMASAMSAMXMSXSSMXMAXAMXMASMXSAMAMAMASMMMSAMXAMAMAMXMXMAMXMASXS",
  "AXAXASMSSSMSAAAXXASASAMMMMSMMMASXSSMXMASXAMSMXSASAMXAXMMAMXAMMSMSMSXSASAXAXMXMAMAMAMMSMXMMAXAXXMSMSXXMXMMAMXMSMSMXXAXMSMMMSXSMXSASMSMSASMMSS",
  "MSAXAMXAXAAMSMSSMXMAXXMASAAAXXMAMAAMMSAMMXXAXAMXMASXXMXAXXMMMXAXXASAMXMMMMSXXSXSASXMXXXMAMXMMXMAMAAAMSMSXMASAAAXMASXMMMSAAXAXMMSAXAAAMASXMAS",
  "XAXMAMMMMMXMXMAMXXXSXSXMMMXXMAMSMMMMMAAXAMAMMMXASMMMSSXMMASMAXMMMMMXSXMASMMXXSASXSMSAMASASMSXSXSMXMXMAASAXAXXMMMMAXMAAAXMSMAMAAMSMSMSMXMXMAS",
  "MAASAMSXXXAMXASXMSAMAMAAASMSXXMXAXMXMMMMMSASAMSMXMAASXAMSASXSSXMAXMXMAMAMAASMMAMXXAMASAMXMASAAAXXAMASMSMMSSSXMMXMASXSMSSMAMASMMMAXXAXXXAAMMS",
  "ASMAMAMAMSMSAAMAMSAMAMSMMMAAMSASMMSAMAXAAMASMXAAMXMMSMSMMASMXMASMMSASXMXSMAMXMAMXMSSMMMSAMXMSMSMSMSASXMAMAAAASMMMXAMXAMAMXSASAMSSXMMMMXSXSAM",
  "XXXASAMXMAMMMSMXMMAMXMMASMMMMSASAAMAXSMSSMAMXSMXSAASXAMXMAMAAMAXAASASAXXXMXMASAMAAXAXMMSXXSAMXMMAMMXSXSMMMSMAAAAMSSMMMMMSXMXSAMAXASXSMAXAMXS",
  "MMSXSMSMSSSMSAAAMSMMXMMAMMMSXMMMMXMSMXAAMMSMXXAAMXMMMMMAMXXSAMXMMMMASMMSXMASASASMMSAMSXMASMMMSMMSSMAXXXASAXXMSMMMAMXAAAXMMAMMXMASXMAAXASASAS",
  "XAMXMMMXMAAMSSMMMAXMASMMMMAAAXSASXAAAMSXXMAXSAMXSMMSAMSSMAXMASMMMAMXMMAMASAMXSAMMAXMAXASMMSMAMSAXAMXSAMXMASXXMXSMSSSSSSSXMAMXAMMMAMSMMMMAMAS",
  "XXXXXAMAMMMMMMMSSMXSAMMSAMXMMMSASMMMXMAAMAMASXSAAAAXAXAASXXSMMAMSSSMMMASMMMSAMXMMXMASMMMXAAMASMXSSMXSMMXMAMMMSAMXMAMAAAAMSASXAMMSSMMXMSMAMAM",
  "ASMXSASASASXXAAMASAMAMAXMMSMSAMXMAMXAMMMMAMMSAMXXMMSSMSXMMMAMXSXAAXAAXXXMAMMMSAMMSASAMXAMSMSXSMMMAMXXAMXMASAXMASXSMMMSMMMXAXMAMMAMAAAAAAMMMS",
  "XAAASXSAXASMSMMSAMXSXMSXSAMXAMMAXXMMMSAMSXMMSXXMXSAXXAXMSXMMAMXMMXSSMSSMSSMAASASAMXASXMXXMASAXMAMAMASMMAXAMMMSXMAAASMMAMSSSMMAXMAMMMSSXSMAXX",
  "SMSMSMMXMSMMASMMMMXAAMAAMMSASMSMSMXSAMAXMAAAXMASXMAMMAMAMAMSMMASAAMAMAAAAXMMMSMMASMAAMMMAMAMAMSSSXMMAXXXMMSXXAAMSMMMAMMMAAAMMMSSSMAMAMAAMXMX",
  "XAAXXAMMXMASMXXAXMMMMMAXMAMXMAAMAAXMAMXMMXMSMMAXMXSXXMMAMAMAASASAXMAMSSMMSAMXSAMASAMXAAMXMSXSAAXMXSMMMXSSMAXXMMAXAMMSMAMMMMMXXXAXMAMMMSMMSMA",
  "MMMXXSMXASMMXMMMXSAXMXXMMXMAMSMMMXSSSMASASXXXMASMAMAMXSMXMMSXMASAMSSMMMAAXMMASAMAMXSSSSXSMMAMMXXSAXAXAASAMXSSXSMSAMAMMXSSMSMMXMXMSXSXAXMXAXM",
  "XMAMXASMMSAAXMASASMSSMSMSAMXXAMXXMAAAAXMASAMAMASMXSAAXXAASMMMMXMAXXMASMMMSSMASXMASAMAAMMSAMXMSMAMMSMMMXSAMAAXAMASXMXSXAAAAAMMMMAAAMXMXSASXSM",
  "XMAXXAMXXSMMMMAMAXXXAAXASMSMSASASMMSMMMMXMAMMMMXAXSMSMMMMMAAXAXSXMASAMXAXSXMASAMAXXMMMMAMAMAMAMMXAAMASASXMASMSMMMASAMMSSMMMSAAMMXMMSMMAMSASX",
  "SMASMSMMMMMSXXSMSMXSMMMMMAAASAMAAAAAMXSXAMXXXASMMMXMAMXSASMMMSMAXAXMXSSMMXAMAXAMMSSXAAMXMMSSSXSAMXSMASMXXMAXXMAXSAMASAMXXAASMSXSXXAAAXMXMAMS",
  "AMAMAAAAAAAAXSXAAAMXAAMXMMMMMMMMMMSMSAMMMMMMSASAAAAXASXMAAXAAAMMSSXMXMAXMSMMMMMMSAMXSXSSSMAASAMASMAMAMMSMMAXASAMMXSAMXSSMMXSAXAAXMSSXMXXMAMX",
  "MSAMSMSSSSSSMXMSMXASMXSAXAMXAXXAXAXXMASASASXSMSXMSMXASXMAMMMSSMXAMXMMMSAXAMASAAMSAMXXAAASMMMMXSAMMAMXMSAMSSMMMAMAXMAXMMXAXAMMMMMSMAMAXXSXXSA",
  "XMAMXAAMXAAMAAXAAAXXMASMSMSSSMSSMMSASXMASASAXASXMAXMMMMAAXMAXMMXMXMXMAMMSASASMSMXASAMSMSMXMXXAMASXSMSMSAXAAXXMMMMSSMMAAXSMMSASAAAXASXXMAMAMX",
  "XXMMMMMSMXMXSXSMSMMAMMSXMAMAMAXXAMSMMSMAMMMMMAMXMASMAAMSSSMMSASXXXSAMXSXSAMASAMASMMAMMXMAMSMMXSAMXXXSASMMMSMSMAAXMAXSMMMXAXMASMSMSMSASAAASMS",
  "SMSAXMAXAAMXMAMAAASMMMSAAAMMMSMSSMMAAXMSMSASMMMSMXSXSXXAMAAAMAMXMASASMMAMXMAMAMAMMAMMMMMAMAAXAMAMAMXSXSMSXMAASXMSMXMMAMASMMMAMMAAXXMAMMSMXAX",
  "SASXSMSXXAXAMAMSXXXXSXSXSXSXAMMAAASMMXMMXMAMAMXXXXMAXMMSXXMMMAMXMAMXMMAAMMMMSAMASMAMMXMSAMMSMXSAMXSAMMSAMMMSMXSAMXXAXAMMXMAMSSSMMMMMAMXXAXMX",
  "MAMASAAAMSXSMMMXXMASAAXAMMAMMMSSSMMASMXMXMMMXMXSASMMSAMAASXSMSAXMSSSMSXMMXAAXAXASXXMXAMMAMSAMXMAMAMASAMAMMAXASMMMMSSSSSXSSSMMAAAXMXSASXMSMXM",
  "MSMMMMMSMMAXXAAXSASXMXMAMAXXMAMAMASAMXAMXMSAAXASMXAASAMMSMAAAXASXAAXAAXSXSMSSXSXMXSSMXMMAMXAMMMSMSXMMMMMMMASXMAXAXXAAXXAMAAASXSMMMASMSMAAMAS",
  "XXAXAXSAAMAMSMMSAXXXXSMXMSMSSSMAMAMASXXSAAMSSMAMXSMMSXMXAMSMMMAMAMXMMMSXAAAAMMAMAAXXAASXMMSSMSAMMXAXSXASMMMSASXMMMMMMMMMMSXMMAXASMASMSMSMSAS",
  "XMMSSSSMMMSMXAXAMXMXXXAAMMAXXMXXMASXMXAMAXMAMMXMAMXXMASMMXMXSMSMAXASAMMMMMMMSSMAMSSMSMMASAAMXMASAXMMSMMMASASMMSXAAAAAAAXAMSMMAMAAMASAXAMAMXS",
  "MSAAMMMAAAMMXSMMXMASMMMMSMSSMMMSMMXMAMXMMMMASXSMMSXSXSAMXAMAXAASXMASASXAXSXAAAXSMAAAAXSAMMXMAMSMXMSAMXXXAMMXAASXSMSMSSSMXXAXMAXSMMASMMMMXMAS",
  "SMMXXAMSMMMSAMXXMAMMASAMXXAAAAAAAMASMAAAXAMAMXMASAASMAMSXMSAMSMMXMASAMXSMMMMSSMXMSMMSMMXSMXSXSAASXMASMSMMSXSMMSAMXMMAAAASMSXSAXAXXAMXMAAAXXX",
  "MASXSMXAAXAMMSMASAXSAMAXXMXSSMSSSMAAASASXSSSMMMXMMXMASMMAMMMAXASXXMMXMAXAXXXMAMXMXMAMAMXMAASMSMXMASAMAAAXSXSAAMAMAMAMMMMMAAMXMASAMMSMMAAXMMX",
  "XAAMASMXSMSSXXMAXMMMMSSMASAMXAXAAMMMXXSXXXAAMSMSAXMMAXASMMAMAMMMXAXSAMXSMMSMXXMAXAMMSAMAMMMSAMXASMMAMSXSMMASMMSSMASMAAXXMMMMAXXMMMAAAMSMMAAM",
  "MXSASASAAAAMMAMXXSSMAAASAMXSAMMSMMMXMXMMMMSMMAAXASXMASXSASXMXSMSXMMMMSAMMAXAAMSSMXMAMAXAXAMMXMMXMASXMMAMXMAMMAXASXXXSMSMSAXMXSMSSSSSSMAASMMA",
  "XXAMXAMMMMMSAMXSXAAXMSMMMMXSASAXMAXAMMMXSAMASMSMAAAMXSASAMXSAMMSAMXAAMAMMXSMMXAMMSMMXSSSMSSSSXXASXMAAXSXMMXXMXSXMSMAXAAAXXSAAAASAAAAMMSMMAAS",
  "MMMMMAMSXSMMMMAAMSMMMXMXAMXSAMASXMSASXAAMASAMXXXMSXMMSXMAMAMMSAXAMSMSSSMSASASMMSAMASAXAMAAAAAASXMSAMXMAAMXMASASMAMMSMSMMMAMMXMXMMMMMMMMMAMXX",
  "AXAXAAXAASXSAMSSXXAAXAMMASXMXMAXAAMAMMMMSAMASAMXMMAMASXSSMMSAMASMMXMMAMXMASAMXXMASAMMMAMMMMMMMSAMAMXAASXMAAMSAMMAMAAAMAXSAMAXXASAMXASAXMMMMM",
  "SSSSMMMMXMASMXAMMSMMMAMMAMMSSMSSMSMMMXXXMASAMXASAXAXXSAXAAXMASXXAAAMXSSXMXMMMXMSMMASMMMMAXAXXAXXMAXSAMXASMMXMAMSXSSXSMSMSASXMSAMASXXXMMSAAAX",
  "MAMAASMSAMAMXMASAXAASASMAXAAAAAXAXXXASMMSXSXMASMMXXSAMMMMMMMAMXMMSMSAAXXMAXXSXMAXMAMAAMSMSMSMSXSSXMAMXSAMASXXAMXAAAXXAMAMAMAMMAXSMMSXSASXXMX",
  "MAMSMMAXMSASMMAMMSSMSAXMMMSSMMMMSMAMMSAASASMMXMAMASMXMXAASMSMXAAXAMMAMMAMMXMMASXSMASXSMAMMASXAAMMMMAMAMASXAASXMMMMMMMAMSMSMMMMXMAAAXXMASMSSM",
  "MAMXXMAMXSXSAMXXXAMAMXSAMXXMXMXAASAMXSMMMMSMXXSSMMAAAXMSMSAAMSMSMXSAAMMAAAMMSXMASMMSAAMMXMAMMMSMAASAMXMAMXMMMMASXMAAXAMXAXAXSXSASXMSAMXMMAAM",
  "MSMSMAAAXMASMMMSMMMAMXSAXSAMASMSMSXMAMXSSXMMSXAASXMSMSMMAMXAMAMAMMXXASXSMXXXAXMXMAXMMMMMAMMXMAXMSMSASAMASAXAAXSMASMMSAAXSMSMAAAXMXAXXSSSMSSM",
  "AAAAAMXXMMXMMSXAAASMSXXAMAASASXXMSAMMSMMSXMAXMMMSMMAMXAMXSSXSXSASMAMXMAMAMXMAXSASMMMMSSSXSAASAMXAMSMMASASMSSMSAMXMAASXMXXAMAMXMXSXMMAAAMAMXM",
  "SMSMSXMASXMSAMSMSMSAMMMSMSXMASAMASAMAAAASMMSSSMAMXSAXSXMMAXXXAMAMMXMXSAXMASMXMAAMXASAAAAXMMXSMXXMMMSSXMASAAAMSMAXXMASAMSMSMAXAXMAMMASMMMAMAA",
  "MAMAXAMASAAMAXSXMAMAMMAMAMMSXMAMMSSMSSSMXASXAAMXSASMMMXSAMMMMSMSMMSMMMXMXSXMMMMMMSSMMSSMSSMXMMSXXMAAXXMSMMMSMSSMXMMMXMMAAXSXMSXAMAXAMASMMSAM",
  "SAMXSAMASMSMMMXAMXSSMMASAMAXXSXMMXMMXAXXMMMMSMMXMMXSAMXMMXAAAAAXMAMSMSSMXMASAMAMXXAXXXAXXAXXAAMAMMMMSMMMAMMAMXMMASAMSAMXSAMMMMASXSMMXXMAAXAX",
  "MXSXSXMASAAMAMSXMMMMASASXMASMAASXAXSMMMSSXSXMASMMXXSMSAMASMSXMMMXASXXAMMMSAMSXSMXXAMSSMMSMMSMMXSAAMXXAXSAMXAMAAXAMAMXAMXMMMMASMMMMASXMSMMSXM",
  "XSAMXMMAMMMSAXMASAMSAMMSAAAMASAMMSSMAAAXXXAASXMASAMMMSASXMAXAXMASXSMMMSAAMMSMXMASMMMXAXAMXXXAAAASASMSSMSASXSXXMMSMMMSMMASAAXXMSAXSAMAAXXAMMS",
  "XXXAAAAXXSMSMSXMMSMMASXSXMXSAMAMAXMXSMSSMASAMXSXMMAMMSAMXMAXAMMASXMAAXSMSXMAMXMAMASMMMMSSMSMSMSXMXMXAMAMXMAMASXXMAXMAXSMSMSSSXMMMMASMMMMXSAA",
  "XMSSSSMSXMASAMASMMSSMMMMMMXMXSXMXSMAXMMXMAXAMXSMAMSMMMSMMMSSSMMASASMSASXMMSASXMASXMAAAAXXAAAAMXXXSMMXMMSAMXMAMAASXMXMMSAMAXAMXMXMSAMAASAAMXM",
  "XMAXMAMMAMAMASAMAAAXXMAMAXAXAXAAAAMXSXXXSASAMAXMAMAAXAAXSAMXMAXAXAMAMMSAMXMASXSMSMSSMMSSMXMXXMMSAAAXMAMXAMAMXSMMMXAASXMAXSMSMSAAMXMXSAMMSSMS",
  "SMMSSMMSMMSSMMMSMMSSSSSSSMMMMSMMSXMASMSMMAMAMMSSSSSXMSSSMMSMSSMSXAMAMXSAMXMSMAXAMXXAMXAAXXSSSMASXSMMMSMSXMXSMMXAXMSMSAMMMMAAASMSMAXMXXAAXMXA",
  "XAXAAAAMAAAAXAXXMAXAAAAAXAAAMAXXMXXXXAASMAMSSMAXMAMXMAMMXAMAAAAMXMXXXAMAMXMAMAMMMSSSXMSSMAAAXMAMXMXXXAASXSXAASMMMMXASAMXAMMMXMAAXSMMAXMASMMM",
  "SSMASMMXMMXMMMSMMMMMMMMMMSSMSMSXMASMMSMSXXXMAMXMMAMXMSXSXXSSMMAMAMMXMMSXMAMMMSSXAAXXAMXAXMMMMMXSXSSMMMSMAASMMMMAASMMSAMSSSMSMMSMMMAXAMMAAXAX",
  "XMAMMAMXXMASAMAXAAAXMSMXMAXXMAXAMASXAMASMSSSMMMXXMXSAMAXXAMMSSMSASMXSAAXSASXSAMMMMSSXMMSMSAXXSAXAAMASXMMSMXMASMSMMAAXAMMAAAAAMXSAMAMXSXSSSSS",
  "SAMXMAMSASASASXSSSMMMAAAMASMMMSSMXSMSMAMAAAAXASMMSAMAMAMAXMAAXXMASAAMMSMSASXMAMSAAAMASAXAMXMXMSSMMSAMAMAAXMXSXMXMSMMSXMMSMSSSMSMSSXMASXMXMMM",
  "MMSMMMMMAMXMMMAMAMXASMXMSXXMAMAXAMMAMMMSSMSMMMAAXMAMXMMMMMMMSSSMXMMMMMAAXASXSAMXMMMSAMASXMAAAAMXAXMAMMMMSMXMMAMXMAMMAMXAXXXAAXXAXMAMXSASMXAM",
  "MAAMAMAMMMXMASXMAMMXMXSMXASMSMMSMSMAMAAXAXAXAMMSMSAMMSAXAAXXXAXMXXMAMXASMXMXMXSXXMAMMSAMXSMSSSMSSMSMMSAMAAAMSAMAMAMXXAMXSAMXXAMXMMAMXSXMASAS",
  "MSSSXSAXMAASAMAMASXSAMAMXSXAXXMAMAASMMMSMSMXMSXMXSASASASMSSMMMAMSSSMSXXMASXMMASXMMASAAMMXAAAAXMAMXAMASASAXXMAASASASAMMSMMXSSSMMASMMXXMAMMMMM",
  "XAAAASAMMSMMASMMASXMASMXMMMMMMSMXMSMMXAXMAXAAXXMASXMMMMMAAXXASAAAAAASMMXSMSAMAMAXMSSXMMMSMMMSXMASXMSXSXMAMSXMXSASMSASXAAMAMMAMSASASXAXAMASXS",
  "MMMMMMAMAXASXMAAMMASAMXAMXMSMAAAXSAMXMXMSAMMXMXMASMMAAMMMMMXXSMSMSMMMASMXMASMMSMMSASMXMASXXAXXSASXXAMMXMAMAAXMMXMASAMXMXMAXMAMMXSAMMMSMXASAA",
  "SAMMSSMMMSAMXSXMMSAMAMSASAMAMSSSXMASXAXMAXSAAMMMXSASXSSXMASAAXMAMXAXXXMAXASXSXAXMAXMXMMASMMMMAMASMMMXAAXASMXMAASMMMSMMXMMMXSAMSAMAMXXAXMSMXM",
  "SASAMAMAMXAAXMASXMAXXMAAMAXXXAMXMMAMMSAAAMSMXSAMSMXMAAXXSAMMAMXXMSSMMSSSMXMAMXMXXSASXSMASMAXMXMXMASAMMSMMSAASXMMAXSAXMASAAXSXMAMSMMXMAXXMASX",
  "SAMXXMMAXMAMXSAMXSAMSMSSSMMSXMMASMMMAXSSSXMAMAMXAMAMMMMMMASAXXMAMAAAXAAAMXMAMSMXXXAXAAMAMMASXMSASXSXSAAASMXMSAMXXMSAXSASMSMSMXMXAAAXMSMMMMMM",
  "MAMMSMSMSAMXMMXSMMMMAAAMAAAXAXMAMAXXSXAXXAMMMAMXASMXXXXXSAMXMMAMMSSMMXMAXAMAXAMXMMMMSMMSSMASAAMAMAMAMXXXMASXMAMXAXXXMMXSAAAXMAXSMXMXXXMAMAAX",
  "SAMXAAAAXXSXSMAMAMSSMMMSMMMSMMMSSMMMMMMMMSXXMAMSXXMMSAMXXMMAMMSAMAXAMMSMSMSSSMSAAAMAXAMXAMSXMMMSMMMAMXMSMMMAMMSXSAMXXXMMMMXASXMAMSMSAMXSSSSS",
  "SASXMSMSMMXAXMASXMAAAMXSXMMXMXAAXMAASAXMAMMXMAMSMSMASAMASMSXMAMXMMXAMAAMAAMAAXSXSSXSSSMXSMMXSXAXAMSAMXXAAXSSMAMMXASMSSSMSSXXAMXAMAAAAMAAAAXX",
  "SSMAXXAXAXMSMSAMXMXSMSAMAMMAMMMSXSMSXMSMASMAXSXMAAMMSAMXSAAXMSSMASMMMSSSMSMSMMMMMMMMAAMMXAMAMASMMMMASMSSSMAMMXMAXAMXAAAAAAMXMAMXMMSSMMXSMAMS",
  "SMSSMMXMXMAMAMMSMSXAXMASXMXASAMXAMXXMAAMASMAXMAMSMSXSMMAMMMMXMAXMAAXXAAMXAXASAAAXAAMMMMAMAMSMAXAMSSMMAAAAMXMXSMSMSMMSMMMMSMMSXMASXMAAXAMMSXA",
  "MAAMAMSASMXMSAXAAXSXMSAMASXMSXSMSMAMASASASMXXMAMMAXAMAMXSXXMSAMXMXMMMMMMSMXAMSXMMXSSMSMXXAMXMMSSMXAAASMSMMXMMMAXXXAXXXXXAAAXAAMASASXMMMSAMAM",
  "MMMSAAMAMAAAXSSMSMMMMMAMAMAXXAAAAMAMMMXMMSMXMSMMMMMMSAMSAAXSXMAMSMXXAMAMASMSMMMSSSXXAAASMSXSAMXMXXSMMXXXMSMMAMXMXSXMXMMMXXXMMMMASXMMSSXMAXSX",
  "AMXMMMMAMXMMMAXXAAMASXMMMSAMMMMXMMAMXXXMAMXAXAAAXMAXXXSAMMMMAMSMAASMMSXXAXXMAXAXSASMSMXMMMAMMXAMSMMSSXSAAMAXMXAXXAXXASASXSMAAXSXMASAAXMSSMMM",
  "AAMXSXMAXAAAXMXSSXSAMMAMXAAMMAAMSSXSAASMSSSSSXMSSSMSXXAAMSXSAMAMMSMAAAXMSMMMAMSMSMSXXMXSAMXMSMSXXAMASXMXMSSMMSSSMSMSMSASAASXMMMASAMMSSMAAAXA",
  "MAXASXMAMMMSSXAMMMMMMSAMXSMMSMMSAAAMMMAAXAAXSAAMXMASASMSMAXSASXSXMASMASMAXMMAMMASXMASAASMMMXMAXMSMMASXXAXAAAXAASAAAAMMMMMMMSAXSAMAXSXXMMXMMS",
  "MMMXXAMSMSAAAMAAAAAXASXSXXSXMAXMMMMAMXMAMMMMXXXSAMSMAMXXMMMSAMXMAMXMMXXMMSXSMSMAMAMAMMXMMAXXMAMXAXMSSMMMMMXSMMSMMMSXSSXSXMAXSMMXSSMMMSSSMSAX",
  "SASMSSMAAXAMXMSSSSSSMMMMAAMMMXMAMXXMXMXXSXSXMMMMAMXMXMMMAXAMAMMSAMAXMMMSXSMXAAMMSMMXSXXMSMSAMAMSASXXXMAMXMAMXMAXXXMXAMAXSMMSMMMAMXAASAAAAMAS",
  "SASAAXMMSMSSXXXAXMAMXMAMMMMXAAMSMMXSAMXMMMSAMXASXMSMSASXMMSSSSXMASMMSAAAAXAMSMMXAXMSMMXAAAXMASXSAXAAXMAXXXXMAMXXXAXMMMAMMXMAAASASXSMMMXMMMXM",
  "MAMMMSSSXAAAMAMMSMAMASASAXXMASXXAXXSASAXXASAMMXSAAAAMMAMXSAAMAASMMMXSXSMSMSXXASXMSXAAXMMMMXMAMXMAMSMSMSXSAMAASXSMXSAAMMMXAXSXMSMSMAMMSXAASMM",
  "AXXXAAXMMMMSMMAXAXXXXMASMSXAAXAXMMMSAMXMMXSAMXAXMSMSMMMMMMMXMSMMSAMXMAMAMAMXSMMAAXXMXMSXXMASXMSMSMAAXMAAMAMSMMMXMMMXMMASMMMMSXSMXMMMAMSSMSAX",
  "XMASMMXMAAXAMXSXMSSMAMMMMSMSSSSMAAAMXMAXSASAMMSSMAAAXAXASXMSXXMAXXMAMAMMMMSAMXSAMSMSAAXAMSAMAAAAAXMSMSMXMXMXAXMXMASASMASAAASAMXSXAXMAMXMASMM",
  "XXXXAXXMXXSASAMSXAAAXXMAMXAMMAAMSXSXSXMXMAMAMXMAMMXMMSXXSAAAASXSMSSXSXSAAMSAMXAXXAAMMSMMMMASMMMMMSSMAAXAAXMMMMSASXXASXASXMMSAXASMMMSXSMMXMAS",
  "SMMSMMMSAAMXMASAXMSMMMMMMMSMMMMMMMMXSASXMSSSMASXMSAMXXMMMMMMAXAAXAAAXXMMMMSMMSMMSMSMAMAMXSAMXSMSAXAASMSSSMSAAXSASAMSMMMSAMXSAMASXSAMMAMXMSMM",
  "XAMASXAMMSMSMXMMSMXMASAAAAXMAXSAXAMAMMMAAAMAXASMASXMAXAAXXMSSMSMMMSSSSXSXASMAAAAMXXMMSAMXMASXAAMMSSMMXAAAASMMMMMMMMAAAAMAMAXSAMSMMASXMSAMAAX",
  "XXMAXMSXXXASMXMASAAXASXSMXSSMSMXSXMASASMMMSSMMSMMMAMMSMMSAAAXMAXAXAMAXAMMMMMSSXSXMMMASAMXMXSMMXMAAMAXXMMMMSAASASAASXSMMSAMXSAMXMAXAMAXSASMXS",
  "SSMSMAAMXXAMMSMAMXASMSXMAMXAMMMMSXSXXAXXAXAXAXXAASXSAMXAXMMMSSMSSMMSMMMMXMAXAAAXXSAMMSXMAMAXMASMMSSMMSMXSXMMMSASAMAXXMXSASXMMMSSMMSSMMMAMXMA",
  "XAAMMSMSSMXMXAXMMMXMASAMXXSAMXAAMASAMSMSSSMSXMSSMSAMAXMSSXAAAAMAAAAMXSAAASMSMMMMASMMXXAXAMSSSXXSXMAXAMXAMAMSMMMMMMSMMXAMMXAXXAXAXAAAXAMSMSAM",
  "SMMMAMAAXAASMMMXASASAMXMSASMXSMXMAXAAAAXMAAAXMAMXMMMSXMMSXMASXMSSMMSASMSMAAAXXAMXMAXSSMMSSMAXXAMSXXASMMXSAMXSAMXXAXAMMMSMSMMMMSMMMSMMMXXASMX",
  "XXAMXMMMSSMSAMXSMSASMMAASXXXASMSMSMMMXMXXXAMXSASAXAAAASXSXMAMXAAAMXMASAAMMSMSSXSXMXMAAAAMMMMMMSMAMMMMSAMSAMXSMMXMXSAMXMAMAAAXXAXXAAAMMMMAMXA",
  "SSSSMSSXXAXSAMAMAMAMASMXMMAMMSASAMXSSSMXXXASXSAMMXMMXXMAXAXAMSMMXMXAMXXXXAAXAXMMASAASXMXSAXXXAAXMAAAAMMXMASMMXSXMMSMXAMASMMMMSASMSSSMSAMXMXS",
  "AAAAASAMSSMSAMXMASXSMXXAAAAAXMAMAMAMAAMAXSAXAMASMSSSMMMMMXMAXAAAMSAMASXMMSSSMSASAMMMMAMMSXMAXSASXSSMSSXXSAMAMXSAMAMASMSASMMSAMAMAXAAASASAMAX",
  "MMMMMMAMAMMSAMXSAMMAMXSSSMSAMXAMAMMMSMMAMMXMXMMMAAAAAAAAAASMMMMMAAAAAAAAAAAAAAXMASXASAMAXMASMMAAMAAAAMAMMASAMASAMASMXAAMSAMMASAMMMSMMSSMAMAS",
  "XMSXMSAMXSMSAMXMMSAMXMAAXAMAXSMSXXSAMXMXSSXAXAXMXMMMSSSMMMSXAXXXASAMXSSMMSSMMMSSXMAXSSMMSSSXXMSMSSMMMMXMAXSAMMSMSXSXMSMSSMMSAMMAMXXAXMMSSMAS"
]

const test = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX']

const answer = [
  '....XXMAS.',
  '.SAMXMS...',
  '...S..A...',
  '..A.A.MS.X',
  'XMASAMX.MM',
  'X.....XA.A',
  'S.S.S.S.SS',
  '.A.A.A.A.A',
  '..M.M.M.MM',
  '.X.X.XMASX',
]




let letters = input
let xmass = 0

for (let y = 0; y < letters.length; y++) {
  for (let x = 0; x < letters[y].length; x++) {
    const cell = letters[y][x]
    if (cell == 'X') {
      // console.log('X', x, y);
      let count = findXmas(x, y)
      if (count) {
        // console.log('xmas', x, y);
        // console.log(xmass += count);
      }
    }
  }
}
// console.log('🎄', xmass);

function findXmas(sx, sy) {
  let reach = 2
  let yp = -1
  let xp = -1
  let count = 0
  for (let i = 0; i <= reach; i++) {
    xp = -1
    for (let j = 0; j <= reach; j++) {
      let x = sx + xp
      let y = sy + yp
      // console.log('searching', searching, x, y);
      const M = letters[y] ? letters[y][x] : ''
      const S = letters[y + yp + yp] ? letters[y + yp + yp][x + xp + xp] : ''
      if (M == 'M' && S == 'S') {
        // console.log('found', x, y, M, A, S);
        let clone = [...letters.map(l => l.split(''))]
        clone[y][x] = '🙈'
        clone[y + yp][x + xp] = '🅰️'
        clone[y + yp + yp][x + xp + xp] = '🐍'
        // console.log(clone.map(l => l.join(' ')).join('\n'))
        count++
      }
      xp++
    }
    yp++
  }
  return count
}

// part twolet letters = input
let mass = 0
let clone = [...letters.map(l => l.split(''))]

for (let y = 0; y < letters.length; y++) {
  for (let x = 0; x < letters[y].length; x++) {
    const cell = letters[y][x]
    if (cell == 'A') {
      console.log('A', x, y);
      let count = findMas(x, y)
      if (count > 0) {
        // console.log('MAS', x, y);
        mass += count
      }
    }
  }
}
console.log(clone.map(l => l.join(' ')).join('\n'))
console.log('🎄', mass);


function findMas(sx, sy) {
  let reach = [[-1, -1], [1, 1], [-1, 1], [1, -1]]
  let map = ''
  let solutions = /MSMS|SMMS|MSSM|SMSM/
  for (let i = 0; i < reach.length; i++) {
    let pos = reach[i]
    let x = sx + pos[0]
    let y = sy + pos[1]
    let char = letters[y] ? letters[y][x] : ''
    map += char
    console.log('--', char);
  }
  if (solutions.test(map)) {
    clone[sy][sx] = '🎄'
    console.log('LIVE MAS', sx, sy)
    return 1
  }
  return 0
}