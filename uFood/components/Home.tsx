import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.headerView}>
        <View style={styles.firstCont}>
          <View style={styles.locationOne}>
            <Icon name='near-me' size={30} color={'white'} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Campus Punjab</Text>
            <Icon name='keyboard-arrow-down' size={30} color={'white'} />
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Chitkara University, Punjab</Text>
          </View>
        </View>
        <View style={styles.containerTwo}>
          <TouchableOpacity style={styles.button}>
            <View>
              <Icon name='currency-rupee' size={20} color={'white'} />
            </View>
            <View>
              <View>
                <Text style={{ color: 'white', marginTop: -7 }}>Umoney</Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 800 }}>₹79</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainView}>
        <View style={styles.searchBar}>
          <TextInput placeholder='Search Food...' style={styles.textInput} />
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', marginTop: -10 }}>

            <View style={styles.blockOne}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Gym</Text>
                <Text style={{ color: 'grey', fontWeight: '500' }}>Get</Text>
                <Text style={{ color: 'grey', fontWeight: '500' }}>Membership</Text>
              </View>
              <View>
                <Image style={{ height: 60, width: 60, marginTop: 10 }} source={require('../images/gym.png')} />
              </View>
            </View>

            <View style={styles.blockOne}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Uniform</Text>
                <Text style={{ color: 'grey', fontWeight: '500' }}>Professiona</Text>
                <Text style={{ color: 'grey', fontWeight: '500' }}>lism starts</Text>
                <Text style={{ color: 'grey', fontWeight: '500' }}>here</Text>
              </View>
              <View>
                <Image style={{ height: 50, width: 50, marginTop: 15 }} source={require('../images/uniform.jpg')} />
              </View>
            </View>

          </View>

          <View style={styles.venkysMenu}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <View style={styles.venkyOne}>
                  <View><Icon name='star' size={20} color={'gold'} /></View>
                  <View><Text style={{ color: 'green' }}>Newly Launched</Text></View>
                </View>

                <View>
                  <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 }}>Venky's</Text>
                </View>
                <View style={{ marginLeft: 16, marginTop: 4 }}>
                  <Text style={{ fontSize: 12, color: 'grey', fontWeight: '500' }}>Venky's- CU Punjab Rajpura</Text>
                </View>

                <TouchableOpacity style={styles.venkyMenuTwo}>
                  <Text style={{ color: 'white', fontWeight: '500' }}>Full Menu</Text>
                </TouchableOpacity>
              </View>

              <View style={{ margin: 17, marginLeft: 60 }}>
                <Image style={{ height: 100, width: 100 }} source={require('../images/shop.png')} />
              </View>
            </View>

            <View style={{ marginHorizontal: 15, marginBottom: 12 }}>
              <View>
                <ScrollView horizontal={true}>
                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/food1.jpg')} >
                      <Text style={styles.menuText}>Sea Food</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/food2.jpeg')} >
                      <Text style={styles.menuText}>Breakfast</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/food3.jpg')} >
                      <Text style={styles.menuText}>Indian</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/food4.jpg')} >
                      <Text style={styles.menuText}>Pazzta</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/food5.jpeg')} >
                      <Text style={styles.menuText}>South Indian</Text>
                    </ImageBackground>
                  </View>
                </ScrollView>
              </View>
            </View>

          </View>

          <View>
            <View style={styles.lineContainer}>
              <Text style={styles.title}>Collections</Text>
              <LinearGradient
                colors={['gray', 'transparent']}
                style={styles.line}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </View>

          <View style={styles.containerThree}>
            <ScrollView horizontal={true}>
              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/drink1.png')} />
                  </View>
                  <View>
                    <Text>Beverages</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/drink2.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>
                      Coffee and{'\n'}chai
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/snack1.png')} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Snacks</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/snack2.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>Noodles</Text>
                  </View>
                </View>
              </View>

              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/break1.png')} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Breakfast</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/break2.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>Sandwich</Text>
                  </View>
                </View>
              </View>

              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/cake.png')} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Cakes</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/dessert.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>Desserts</Text>
                  </View>
                </View>
              </View>

              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/pizza.png')} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Pizza</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/frenchFries.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>French Fries</Text>
                  </View>
                </View>
              </View>

              <View style={styles.subContainer}>
                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/lunch.png')} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Lunch</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={styles.collectionItem}>
                    <Image style={{ height: 50, width: 50, }} source={require('../images/dinner.png')} />
                  </View>
                  <View>
                    <Text style={styles.label}>Dinner</Text>
                  </View>
                </View>
              </View>

            </ScrollView>
          </View>

          <View>
            <View style={styles.lineContainer}>
              <Text style={styles.title}>La Pino's Pizza</Text>
              <LinearGradient
                colors={['gray', 'transparent']}
                style={styles.line}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </View>

          <View style={styles.laPinosMenu}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <View style={styles.venkyOne}>
                  <View><Icon name='star' size={20} color={'gold'} /></View>
                  <View><Text style={{ color: 'green' }}>Most Rated</Text></View>
                </View>

                <View>
                  <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 }}>La Pino'z Pizza</Text>
                </View>
                <View style={{ marginLeft: 16, marginTop: 4 }}>
                  <Text style={{ fontSize: 12, color: 'grey', fontWeight: '500' }}>La Pino'z Pizza- CU Punjab, Rajpura</Text>
                </View>

                <TouchableOpacity style={styles.venkyMenuTwo}>
                  <Text style={{ color: 'white', fontWeight: '500' }}>Full Menu</Text>
                </TouchableOpacity>
              </View>

              <View style={{ margin: 17, marginLeft: 40 }}>
                <Image style={{ height: 150, width: 120, }} source={require('../images/shop2.jpg')} />
              </View>
            </View>

            <View style={{ marginHorizontal: 15, marginBottom: 12 }}>
              <View>
                <ScrollView horizontal={true}>
                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/pizza1.jpeg')} >
                      <Text style={styles.menuText}>Chicago Style</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/pizza2.jpg')} >
                      <Text style={styles.menuText}>Greek Pizza</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/pizza3.jpg')} >
                      <Text style={styles.menuText}>Sicilian Pizza</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/pizza4.jpg')} >
                      <Text style={styles.menuText}>Pizza Marinara</Text>
                    </ImageBackground>
                  </View>

                  <View>
                    <ImageBackground style={{ height: 80, width: 80, justifyContent: 'flex-end', marginRight: 10 }} source={require('../images/pizza5.jpg')} >
                      <Text style={styles.menuText}>Italian Pizza</Text>
                    </ImageBackground>
                  </View>
                </ScrollView>
              </View>
            </View>

          </View>

          <View>
            <View style={styles.lineContainer}>
              <Text style={styles.title}>Trending Outlets</Text>
              <LinearGradient
                colors={['gray', 'transparent']}
                style={styles.line}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </View>

          <View style={styles.trendingCards}>
            <ScrollView horizontal={true}>
              <View style={styles.subCards}>
                <View>
                  <Image style={styles.cardImage} source={require('../images/card1.png')} />
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
                  La Pino'z
                </Text>
              </View>

              <View style={styles.subCards}>
                <View>
                  <Image style={[styles.cardImage, { resizeMode: 'center' }]} source={require('../images/card2.jpg')} />
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
                  Wendy's
                </Text>
              </View>

              <View style={styles.subCards}>
                <View>
                  <Image style={[styles.cardImage, { resizeMode: 'cover' }]} source={require('../images/card3.jpeg')} />
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
                  Los Pollos
                </Text>
              </View>

              <View style={styles.subCards}>
                <View>
                  <Image style={[styles.cardImage, { resizeMode: 'center' }]} source={require('../images/card4.png')} />
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
                  Domino's
                </Text>
              </View>

              <View style={styles.subCards}>
                <View>
                  <Image style={styles.cardImage} source={require('../images/card5.jpg')} />
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
                  Pizza Hut
                </Text>
              </View>

            </ScrollView>
          </View>

          <View>
            <View style={styles.lineContainer}>
              <Text style={styles.title}>Explore All Outlets</Text>
              <LinearGradient
                colors={['gray', 'transparent']}
                style={styles.line}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </View>

          <View style={styles.explorePage}>
            <View>
              <Image style={styles.exploreSubImg} source={require('../images/explore1.jpg')} />
            </View>

            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10 }}>
                  <Image style={{ height: 80, width: 80, borderWidth: 1, borderRadius: 10, borderColor: 'green' }} source={require('../images/explore1_1.png')} />
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                  <View>
                    <Text style={{ fontWeight: '500', fontSize: 21 }}>Baskin Robbins</Text>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: 6 }}>
                    <View style={styles.reviewIcon}>
                      <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                        <Icon name='star' size={20} color={'white'} />
                        <Text style={{ color: 'white', fontWeight: '900', }}>3.90</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Icon name='trending-up' size={30} />
                      <View>
                        <Text style={{ fontWeight: '800' }}>11975 people ordered from</Text>
                        <Text style={{ fontWeight: '800' }}>here</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>


            </View>

            <View style = {{flexDirection:'row'}}>
            <View style = {styles.exploreMemos}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color:'darkred'}}>Ice Cream</Text>
              </View>
            </View>

            <View style = {styles.exploreMemosTwo}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color: 'darkred'}}>Cakes & Desserts</Text>
              </View>
            </View>
            </View>

          </View>

          <View style={styles.explorePage}>
            <View>
              <Image style={styles.exploreSubImg} source={require('../images/explore2.png')} />
            </View>

            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10 }}>
                  <Image style={{ height: 80, width: 80, borderWidth: 1, borderRadius: 10, borderColor: 'green' }} source={require('../images/explore2_2.png')} />
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                  <View>
                    <Text style={{ fontWeight: '500', fontSize: 21 }}>Subway</Text>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: 6 }}>
                    <View style={styles.reviewIcon}>
                      <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                        <Icon name='star' size={20} color={'white'} />
                        <Text style={{ color: 'white', fontWeight: '900', }}>3.94</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Icon name='trending-up' size={30} />
                      <View>
                        <Text style={{ fontWeight: '800' }}>593 people ordered from</Text>
                        <Text style={{ fontWeight: '800' }}>here</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>


            </View>

            <View style = {{flexDirection:'row'}}>
            <View style = {styles.exploreMemos}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color:'darkred'}}>Sandwich</Text>
              </View>
            </View>

            <View style = {styles.exploreMemosTwo}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color: 'darkred'}}>Green Mint Salad</Text>
              </View>
            </View>
            </View>

          </View>

          <View style={[styles.explorePage,{marginBottom: 30}]}>
            <View>
              <Image style={[styles.exploreSubImg,{resizeMode:'center'}]} source={require('../images/explore3.png')} />
            </View>

            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10 }}>
                  <Image style={{ height: 80, width: 80, borderWidth: 1, borderRadius: 10, borderColor: 'green' }} source={require('../images/explore3_3.png')} />
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 5 }}>
                  <View>
                    <Text style={{ fontWeight: '500', fontSize: 21 }}>Wendy's</Text>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: 6 }}>
                    <View style={styles.reviewIcon}>
                      <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                        <Icon name='star' size={20} color={'white'} />
                        <Text style={{ color: 'white', fontWeight: '900', }}>4.17</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Icon name='trending-up' size={30} />
                      <View>
                        <Text style={{ fontWeight: '800' }}>19883 people ordered from</Text>
                        <Text style={{ fontWeight: '800' }}>here</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>


            </View>

            <View style = {{flexDirection:'row'}}>
            <View style = {styles.exploreMemos}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color:'darkred'}}>Burgers</Text>
              </View>
            </View>

            <View style = {styles.exploreMemosTwo}>
              <View style = {{borderWidth: 1.5,borderColor: 'darkred', borderRadius: 25}}>
                <Text style = {{textAlign: 'center', color: 'darkred'}}>French Fries</Text>
              </View>
            </View>
            </View>

          </View>

          <View style={styles.mainFooter}>

            <View style={styles.mainFooterContainer}>
              <Text style={styles.mainFooterText}>
                One cannot think well, love well, sleep
              </Text>
              <Text style={styles.mainFooterText}>well, if one has not dined well</Text>
              <Text style={styles.mainFooterText}> - Virginia Woolf</Text>

              <View>
                <Image style={{ height: 80, width: '100%' }} source={require('../images/line.png')} />
              </View>

              <View style={styles.mainFooterEnd}>
                <Text style={styles.mainFooterEndTextOne}>Powered By</Text>
                <Text style={styles.mainFooterEndTextTwo}>9191 Hospitality</Text>
              </View>
            </View>

          </View>

        </ScrollView>

      </View>

      <View style={styles.footerView}>
        <View style={styles.footerIcon}>

          <View>
            <Icon name='restaurant' size={30} color='grey' />
            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13 }}>Outlets</Text>
          </View>

          <View>
            <Icon name='receipt-long' size={30} color='grey' />
            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13 }}>Orders</Text>
          </View>

          <View>
            <Icon name='account-balance-wallet' size={30} color='grey' />
            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13 }}>uMoney</Text>
          </View>

          <View>
            <Icon name='account-circle' size={30} color='grey' />
            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 13 }}>Profile</Text>
          </View>

        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e83535',
    flex: 1
  },
  headerView: {
    flexDirection: 'row',
    height: 120,
    padding: 18
  },
  mainView: {
    backgroundColor: '#edeff2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 800,
  },
  footerView: {
    height: 110,
    backgroundColor: 'transparent',
    marginTop: -150,
    padding: 10
  },
  footerIcon: {
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    elevation: 10
  },
  locationOne: {
    flexDirection: 'row',
    gap: 5
  },
  firstCont: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 60,
    padding: 10,
    width: 120,
    height: 45,
    marginLeft: 60,
  },
  containerTwo: {
    width: 180,
    alignItems: 'center',
    marginTop: 5,
  },
  textInput: {
    height: 50,
    borderRadius: 40,
    elevation: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: 500
  },
  searchBar: {
    marginTop: -20,
    marginBottom: 10,
  },
  blockOne: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'white',
    width: '43%',
    borderRadius: 10,
    elevation: 20,
    paddingHorizontal: 10,
    padding: 5,
    justifyContent: 'center',
    gap: 7
  },
  venkysMenu: {
    backgroundColor: 'white',
    marginHorizontal: 17,
    width: '92%',
    borderRadius: 10,
    elevation: 20,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 3
  },
  laPinosMenu: {
    backgroundColor: 'white',
    marginHorizontal: 17,
    width: '92%',
    borderRadius: 10,
    elevation: 20,
    borderColor: 'pink',
    borderWidth: 1,
    marginTop: 17,
    marginBottom: 20
  },
  venkyOne: {
    flexDirection: 'row',
    padding: 4,
    paddingHorizontal: 8,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'lightgreen',
    width: '75%',
    marginLeft: 13,
    borderRadius: 15,
    gap: 4,
    marginTop: 15,
    marginBottom: 8
  },
  venkyMenuTwo: {
    backgroundColor: '#b51010',
    padding: 6,
    width: 120,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 7,
    marginBottom: 21
  },
  menuText: {
    textAlign: 'center',
    color: 'white'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  line: {
    height: 2,
    flex: 1,
    marginLeft: 15
  },
  containerThree: {
    paddingTop: 20,
    width: 400,
    height: 230,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  collectionItem: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'red',
    alignItems: 'center'
  },
  subContainer: {
    height: 230,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  label: {
    textAlign: 'center',
    height: 33
  },
  mainFooter: {
    height: 400,
    backgroundColor: '#edeff2'
  },
  mainFooterText: {
    fontStyle: 'italic',
    fontSize: 18,
    color: 'grey',
    fontWeight: '500',
    textAlign: 'center'
  },
  mainFooterContainer: {
    height: 250,
    marginTop: 20,
  },
  mainFooterEnd: {
    marginTop: 10,
  },
  mainFooterEndTextOne: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center'
  },
  mainFooterEndTextTwo: {
    fontWeight: '800',
    fontSize: 17,
    textAlign: 'center'
  },
  trendingCards: {
    height: 170,
    flexDirection: 'row',
    marginHorizontal: 10
  },
  subCards: {
    height: 145,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 12,
    elevation: 10
  },
  cardImage: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    margin: 5,
  },
  explorePage: {
    height: 430,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 15,
    elevation: 5,
  },
  exploreSubImg: {
    height: 280,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  reviewIcon: {
    backgroundColor: '#3d9c49',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    borderRadius: 6,

  },
  exploreMemos:{
    height: 35,
    width: 80,
    margin: 5
  },
  exploreMemosTwo:{
    height: 35,
    width: 120,
    margin: 5
  }
});