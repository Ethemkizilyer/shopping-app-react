import React from "react";
import { Grid, Box, Text, GridItem } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Button, VStack, Divider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import img from "../assets/whatsapp.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="innerFooter" style={{ textAlign: "center" }}>
        <Grid
          width="100%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          pt="8"
          justifyContent={"space-between"}
          justifyItems={"stretch"}
          columns={[2, null, 3]}
        >
          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize={"lg"} marginBottom={"3"} fontWeight={"bold"}>
                Bakar Ticaret
              </Text>
              <ul>
                <li>
                  <a href="#">Biz Kimiz</a>
                </li>
                <li>
                  <a href="#">Vizyon & Misyon </a>
                </li>
                <li>
                  <a href="#">İş Ortaklarımız</a>
                </li>
              </ul>
            </Box>
          </GridItem>

          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize={"lg"} marginBottom={"3"} fontWeight={"bold"}>
                Sosyal Medya
              </Text>
              <VStack>
                <IconButton
                  width="100%"
                  color={"white"}
                  background={"#314E89"}
                  leftIcon={<FaFacebook />}
                >
                  Facebook
                </IconButton>
                <IconButton
                  width="100%"
                  color={"white"}
                  background={"#1A94DA"}
                  leftIcon={<FaTwitter />}
                >
                  Twitter
                </IconButton>
              </VStack>
            </Box>
          </GridItem>

          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize={"lg"} marginBottom={"3"} fontWeight={"bold"}>
                İletişim
              </Text>
              <IconButton
                variant="outline"
                variantcolor="#84A59D"
                color="#84A59D"
                aria-label="Send email"
                icon={<EmailIcon />}
                width="200px"
                href="mailto:ethemkizilyer3546@gmail.com"
                marginBottom="8px"
              />
              <br />
              <IconButton
                backgroundColor="#84A59D"
                color="white"
                aria-label="Call Segun"
                icon={<PhoneIcon />}
                width="200px"
                href="tel:08500000000"
              />
            </Box>
          </GridItem>

          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize={"lg"} marginBottom={"3"} fontWeight={"bold"}>
                Yardım
              </Text>
              <ul>
                <li>
                  <a href="#">Güvenli Alışveriş</a>
                </li>
                <li>
                  <a href="#">Nasıl İade Edebilirim</a>
                </li>
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
              </ul>
            </Box>
          </GridItem>
        </Grid>

 <span className="wpIcon">
          <a href="https://wa.me/+542/" target="_blank">
            <img src={img} className="iconImg" />
          </a>
        </span> 

        <Divider mt="6" />

        <Text textAlign="center" mt="2" fontSize="16" p="20px 0">
          Copyright 2022 © Bakar | Developer by
          <a href="https://www.linkedin.com/in/ethem-kizilyer/" target="_blank">
            {" "}
            Ethem KIZILYER
          </a>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
